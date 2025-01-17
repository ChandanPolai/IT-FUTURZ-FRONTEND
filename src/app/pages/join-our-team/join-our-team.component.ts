import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { swalHelper } from '../../core/constants/swal-helper';
import { ApiManager } from '../../core/utilities/api-manager';
import { apiEndpoints } from '../../core/constants/api-endpoints';
import { RegularRegex } from '../../core/constants/regular-regex';

@Component({
  selector: 'app-join-our-team',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-our-team.component.html',
  styleUrls: ['./join-our-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinOurTeamComponent implements AfterViewInit {
  cvFile: File | undefined;
  form = {
    fullName: '',
    email: '',
    contactNumber: '',
    position: '',
    coverLetter: '',
  };

  constructor(private apiManager: ApiManager) {}

  ngAfterViewInit() {}

  // Reset form fields
  resetForm() {
    this.form = {
      fullName: '',
      email: '',
      contactNumber: '',
      position: '',
      coverLetter: '',
    };
    this.cvFile = undefined;
  }

  // Handle file input change
  onChange(event: any) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.cvFile = fileInput.files[0];
    }
  }

  // Validate form fields
  validateForm(): boolean {
    if (!RegularRegex.phoneNo.test(this.form.contactNumber)) {
      swalHelper.warning('Please enter a valid contact number (10 digits)');
      return false;
    }

    if (!RegularRegex.alphabet.test(this.form.fullName)) {
      swalHelper.warning('Full name should only contain alphabets and spaces');
      return false;
    }

    if (!RegularRegex.email.test(this.form.email)) {
      swalHelper.warning('Please enter a valid email address');
      return false;
    }

    if (!this.form.coverLetter.trim()) {
      swalHelper.warning('Cover letter cannot be empty');
      return false;
    }

    if (!this.form.position.trim()) {
      swalHelper.warning('Position is required');
      return false;
    }

    if (!this.cvFile) {
      swalHelper.warning('Please upload your CV');
      return false;
    }

    return true;
  }

  // Form submission
  async onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    // Create FormData object to include text fields and file
    const formData = new FormData();
    formData.append('fullName', this.form.fullName);
    formData.append('email', this.form.email);
    formData.append('contactNumber', this.form.contactNumber);
    formData.append('position', this.form.position);
    formData.append('coverLetter', this.form.coverLetter);
    formData.append('cv', this.cvFile as Blob); // Append the CV file

    try {
      const response = await this.apiManager.request(
        { url: apiEndpoints.JOIN_OUR_TEAM, method: 'POST' },
        formData,
        [] // Empty headers to ensure multipart/form-data is handled correctly
      );

      if (response.data === 1) {
        swalHelper.success(response.message || 'Submission successful');
        this.resetForm();
      } else {
        swalHelper.warning(response.message || 'Submission failed. Try again.');
      }
    } catch (error) {
      swalHelper.error('Something went wrong. Please try again later.');
      console.error('API Error:', error);
    }
  }
}
