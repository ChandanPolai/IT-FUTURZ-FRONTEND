import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { swalHelper } from '../../core/constants/swal-helper';
import { ApiManager } from '../../core/utilities/api-manager';
import { apiEndpoints } from '../../core/constants/api-endpoints';
import { RegularRegex } from '../../core/constants/regular-regex';

declare var $: any;

@Component({
  selector: 'app-hire-resources',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './hire-resources.component.html',
  styleUrl: './hire-resources.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HireResourcesComponent {
  showForm: Boolean = false;

  form = {
    fullName: '',
    contactNumber: '',
    email: '',
    country: '',
    city: '',
    skills: '',
    lookingFor: '',
    message: '',
  };

  constructor(private apiManager: ApiManager) {}

  resetForm() {
    this.form = {
      fullName: '',
      contactNumber: '',
      email: '',
      country: '',
      city: '',
      skills: '',
      lookingFor: '',
      message: '',
    };
    this.showForm = false;
  }


  onSubmit = async () => {
    // Validate Full Name
    if (!RegularRegex.alphabet.test(this.form.fullName)) {
      swalHelper.warning('Full name must contain only alphabets.');
      return;
    }

    // Validate Email
    if (!RegularRegex.email.test(this.form.email)) {
      swalHelper.warning('Invalid email format.');
      return;
    }

    // Validate Contact Number
    if (!RegularRegex.phoneNo.test(this.form.contactNumber)) {
      swalHelper.warning('Invalid contact number! Must be a 10-digit number starting with 6-9.');
      return;
    }

    // Validate Country
    if (!RegularRegex.alphabet.test(this.form.country)) {
      swalHelper.warning('Country name must contain only alphabets.');
      return;
    }

    // Validate City
    if (!RegularRegex.alphabet.test(this.form.city)) {
      swalHelper.warning('City name must contain only alphabets.');
      return;
    }

    // If all validations pass
    this.apiManager
      .request({ url: apiEndpoints.HIRE_DEVELOPER, method: 'POST' }, this.form, [])
      .then((result) => {
        if (result.data === 1) {
          swalHelper.success(result.message);
          this.resetForm();
        } else {
          swalHelper.warning(result.message);
        }
      })
      .catch((error) => {
        swalHelper.warning(error.message || 'Something went wrong.');
      });
  };
  
  onSelectTechnology(tech: any) {
    this.showForm = true;
    this.form.lookingFor = `${tech} Developer`;
  }
  
  developments = [
    {
      title: 'Mobile Developers',
      technologies: [
        {
          image: '/images/technologies/android.webp',
          title: 'Android',
          hoverimage: '/assets/technologies/andriod-logo.png'
        },
        {
          image: '/images/technologies/apple.webp',
          title: 'iOS',
          hoverimage: '/assets/technologies/apple-logo.png'
        },
        {
          image: '/images/technologies/flutter.webp',
          title: 'Flutter',
          hoverimage: '/assets/technologies/fluter-logo.png'
        },
        {
          image: '/images/technologies/react.webp',
          title: 'React Native',
          hoverimage: '/assets/technologies/react-logo.png'
        },
      ],
    },
    {
      title: 'Web Developers',
      technologies: [
        {
          image: '/images/technologies/dot-net.webp',
          title: 'Asp.Net',
          hoverimage: '/assets/technologies/asp-logo.png'
        },
        {
          image: '/images/technologies/python.webp',
          title: 'Python',
          hoverimage: '/assets/technologies/python-logo.png'
        },
        {
          image: '/images/technologies/ruby.webp',
          title: 'Ruby On Rails',
          hoverimage: '/assets/technologies/ruby-logo.png'
        },
        {
          image: '/images/technologies/graphql.webp',
          title: 'Graphql',
          hoverimage: '/assets/technologies/graphql-logo.png'
        },
        {
          image: '/images/technologies/php.png',
          title: 'Php',
          hoverimage: '/assets/technologies/php-logo.png'
        },
      ],
    },
    {
      title: 'PHP Developers',
      technologies: [
        {
          image: '/images/technologies/laravel.webp',
          title: 'Laravel',
          hoverimage: '/assets/technologies/laravel-logo.png'
        },
        {
          image: '/images/technologies/codeignitor.webp',
          title: 'Codeignitor',
          hoverimage: '/assets/technologies/codinator-logo.png'
        },
        {
          image: '/images/technologies/wordpress.webp',
          title: 'WordPress',
          hoverimage: '/assets/technologies/wordpress-logo.png'
        },
      ],
    },
    {
      title: 'Javascript Developers',
      technologies: [
        {
          image: '/images/technologies/angular.webp',
          title: 'Angular',
          hoverimage: '/assets/technologies/angular-png.png'
        },
        {
          image: '/images/technologies/node.webp',
          title: 'Node.js',
          hoverimage: '/assets/technologies/nodejs-color-logo.png'
        },
        {
          image: '/images/technologies/react.webp',
          title: 'React.js',
          hoverimage: '/assets/technologies/react-logo.png'
        },
        {
          image: '/images/technologies/vuejs.webp',
          title: 'Vue.js',
          hoverimage: '/assets/technologies/vue.js-logo.png'
        },
      ],
    },
    {
      title: 'Full Stack Developers',
      technologies: [
        {
          image: '/images/technologies/mean.webp',
          title: 'MEAN',
          hoverimage: '/assets/technologies/meanstack-logo.png'
        },
        {
          image: '/images/technologies/mern.webp',
          title: 'MERN',
          hoverimage: '/assets/technologies/mern-logo.png'
        },
        {
          image: '/images/technologies/devops.webp',
          title: 'DevOps',
          hoverimage: '/assets/technologies/devops-logo.png'
        },
      ],
    },
    {
      title: 'AI & ML Developers',
      technologies: [
        {
          image: '/images/technologies/ai.webp',
          title: 'AI',
          hoverimage: '/assets/technologies/ai-logo.png'
        },
        {
          image: '/images/technologies/ml.webp',
          title: 'Machine Learning',
          hoverimage: '/assets/technologies/ai-ml-logo.png'
        },
      ],
    },
  ];

  gotToForm() {
    const targetPosition = $('#technologies').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
  }
}
