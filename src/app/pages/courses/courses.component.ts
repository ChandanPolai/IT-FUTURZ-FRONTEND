import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { swalHelper } from '../../core/constants/swal-helper';
import { ApiManager } from '../../core/utilities/api-manager';
import { apiEndpoints } from '../../core/constants/api-endpoints';
import { RegularRegex } from '../../core/constants/regular-regex';

declare var $: any;

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesComponent {
  courses: any[] = [
    { label: 'Angular', value: 'Angular' },
    { label: 'React', value: 'React' },
    { label: 'Python', value: 'Python' },
    { label: 'MEAN Stack', value: 'MEAN Stack' },
    { label: 'MERN Stack', value: 'MERN Stack' },
    { label: 'Full Stack', value: 'Full Stack' },
    { label: 'Flutter', value: 'Flutter' },
  ];

  form = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    qualification: '',
    collegeUniversity: '',
    course: '',
  };

  constructor(private apiManager: ApiManager) {}

  // Scroll to the form
  goToForm() {
    const targetPosition = $('#book-consult').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
  }

  // Reset the form fields
  resetForm() {
    this.form = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      qualification: '',
      collegeUniversity: '',
      course: '',
    };
  }

  // Validate email
  validateEmail(email: string): boolean {
    return RegularRegex.email.test(email);
  }

  // Validate contact number
  validateContactNumber(contactNumber: string): boolean {
    return RegularRegex.phoneNo.test(contactNumber);
  }

  // Form submission
  async onSubmit() {
    // Basic validation
    if (!this.form.firstName.trim() || !this.form.lastName.trim()) {
      swalHelper.warning('First name and last name are required');
      return;
    }

    if (!this.validateEmail(this.form.email)) {
      swalHelper.warning('Please enter a valid email address');
      return;
    }

    if (!this.validateContactNumber(this.form.contactNumber)) {
      swalHelper.warning('Please enter a valid contact number (10 digits)');
      return;
    }

    if (!this.form.qualification.trim()) {
      swalHelper.warning('Qualification is required');
      return;
    }

    if (!this.form.collegeUniversity.trim()) {
      swalHelper.warning('College/University name is required');
      return;
    }

    if (!this.form.course.trim()) {
      swalHelper.warning('Please select a course');
      return;
    }

    // Prepare the data for submission
    const requestData = {
      firstName: this.form.firstName,
      middleName: this.form.middleName,
      lastName: this.form.lastName,
      email: this.form.email,
      contactNumber: this.form.contactNumber,
      qualification: this.form.qualification,
      collegeUniversity: this.form.collegeUniversity,
      course: this.form.course,
    };

    // Make API call
    try {
      const response = await this.apiManager.request(
        { url: apiEndpoints.ENROLL_COURSE, method: 'POST' },
        requestData,
        []
      );

      if (response.data === 1) {
        swalHelper.success(response.message || 'Enrollment successful');
        this.resetForm();
      } else {
        swalHelper.warning(response.message || 'Enrollment failed. Try again');
      }
    } catch (error) {
      swalHelper.error('Something went wrong. Please try again later.');
    }
  }
}
