import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $: any;

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products: any[] = [
    {
      id: 'fotoowl', // Add unique ID for each product
      image: '/images/products/fotoowl.jpeg',
      name: 'Fotoowl',
      description:
        'Engage with your clients by sharing event photos via Face Recognition. Create Portfolio and Collaborate with clients for photo selection.',
    },
    {
      id: 'nfc-digital-card',
      image: '/images/products/nfc_card.jpeg',
      name: 'NFC/Digital Card',
      description:
        'Digital Card helps yout to share as much information as you require; your networking is not bound to a restricted content space. Either you can share the link or tap on the mobile through NFC.',
    },
    {
      id: 'business-card-scanner',
      image: '/images/products/nfc_card.jpeg',
      name: 'Business Card Scanner',
      description:
        'No need to manage physical cards when you can save the contact details with our Business Card Scanner.',
    },
    {
      id: 'google-standee',
      image: '/images/products/google_standee.jpeg',
      name: 'Google Standee',
      description:
        'Get your Business standout and increase your credibility of your business by having Smart NFC Google Standee for your Business.',
    },
    {
      id: 'whatsapp-software',
      image: '/images/products/whatsapp.png',
      name: 'Whatsapp Software Official',
      description:
        'Transform Your Business With WhatsApp that will help you to improve your Customer Relationship Management & Marketing Using Official WhatsApp Business APIs.',
    },
    {
      id: 'linkedin-premium',
      image: '/images/products/premium_linkedin.jpeg',
      name: 'Linkedin Premium',
      description:
        'Your Network is your Networth so the best way to increase your network and generate leads for your business is using Linkedin Business Premium where you can reach out to your target audience without any limitations.',
    },
    {
      id: 'google-review-card',
      image: '/images/products/google_review_card.jpeg',
      name: 'Google Review Card',
      description:
        'Get your Business standout and increase your credibility of your business by having Smart NFC Google Card for your Business where you can take reviews where you meet your customer easily through just one tap',
    },
    {
      id: 'instagram-card',
      image: '/images/products/instagram_card.jpeg',
      name: 'Instagram Card',
      description:
        'Increase you instagram page followers with our Smart NFC Insta Card such that your brand reach and engagement with your customers can increase.',
    },
    {
      id: 'facebook-card',
      image: '/images/products/facebook_card.jpeg',
      name: 'Facebook Card',
      description:
        'Increase you facebook page followers with our Smart NFC Facebook Card such that your brand reach and engagement with your customers can increase.',
    },
    {
      id: 'automate-business',
      image: '/images/products/automatebusiness.jpg',
      name: 'Automate Business Software',
      description:
        'Automate CRM makes your entire sales process seamless – from lead capture to final conversion.',
    },
  ];

  // Add Router in constructor
  constructor(private router: Router) {}

  getInTouch() {
    const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }

  // New method for View More functionality
  viewProductDetails(product: any) {
    // Navigate to product detail page with product ID
    this.router.navigate(['/product-detail', product.id]);
  }
}