import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  
  product: any = null;
  productId: string = '';

  // Automate Business Product with detailed information and icons
  automateBusinessProduct = {
    id: 'automate-business',
    image: '/images/products/automatebusiness.jpg',
    name: 'Automate Business Software',
    description: 'Automate CRM makes your entire sales process seamless – from lead capture to final conversion.',
    detailedDescription: 'Comprehensive business automation software that streamlines your entire sales process. Transform your business operations with AI-powered task management, real-time analytics, and automated workflows that save you hours every day.',
    features: [
      'End-to-End Sales Automation',
      'AI-Powered Task Assignment', 
      'Real-time Performance Analytics',
      'Automated WhatsApp Reminders',
      'Employee Performance Reports',
      'Smart Task Delegation',
      'Comprehensive Dashboard',
      'Mobile App Access',
      'Custom Workflow Builder',
      'Advanced Reporting System',
      'Team Collaboration Tools',
      'Instant Notifications'
    ],
    price: '₹15,000/month onwards',
    category: 'Business Automation',
    gallery: [
      {
        image: '/images/products/automatebusiness.jpg',
        title: 'Smart Dashboard',
        description: 'Real-time analytics and insights'
      },
      {
        image: '/images/products/automatebusiness.jpg', 
        title: 'Task Automation',
        description: 'Effortless task delegation'
      },
      {
        image: '/images/products/automatebusiness.jpg',
        title: 'Advanced Analytics', 
        description: 'Detailed performance reports'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    benefits: [
      {
        icon: 'fas fa-clock',
        title: 'Save 10+ Hours Daily',
        description: 'Automate repetitive tasks and focus on what matters most'
      },
      {
        icon: 'fas fa-chart-line',
        title: '95% Task Automation',
        description: 'Achieve maximum efficiency with intelligent automation'
      },
      {
        icon: 'fas fa-users',
        title: '500+ Happy Clients',
        description: 'Join thousands of satisfied businesses worldwide'
      }
    ],
    testimonials: [
      {
        quote: 'Managing team in 10 mins a day',
        author: 'CEO, Tech Company',
        icon: 'fas fa-user-tie',
        rating: 5
      },
      {
        quote: 'Saving 4 hours per day',
        author: 'Operations Manager',
        icon: 'fas fa-user-cog',
        rating: 5
      },
      {
        quote: 'Firefighting to Freedom',
        author: 'Business Owner', 
        icon: 'fas fa-crown',
        rating: 5
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get product ID from URL params
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.loadProductDetails();
    });
  }

  loadProductDetails(): void {
    if (this.productId === 'automate-business') {
      this.product = this.automateBusinessProduct;
    } else {
      this.router.navigate(['/exclusive-products']);
    }
  }

  getInTouch(): void {
  const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }

  // Method for Create Account external link
  createAccount(): void {
    window.open('https://tasks.automatebusiness.com/signup?ref=58c0d098', '_blank');
  }

  playVideo(): void {
  }

  viewGalleryItem(item: any): void {
  }

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  scheduleDemo(): void {
    console.log('Schedule demo clicked');
    this.getInTouch(); 
  }

  startFreeTrial(): void {
    this.createAccount();
  }
}