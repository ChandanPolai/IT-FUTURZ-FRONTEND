import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
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
      image: '/images/products/fotoowl.jpeg',
      name: 'Fotoowl',
      description:
        'Engage with your clients by sharing event photos via Face Recognition. Create Portfolio and Collaborate with clients for photo selection.',
    },
    {
      image: '/images/products/nfc_card.jpeg',
      name: 'NFC/Digital Card',
      description:
        'Digital Card helps yout to share as much information as you require; your networking is not bound to a restricted content space. Either you can share the link or tap on the mobile through NFC.',
    },
    {
      image: '/images/products/nfc_card.jpeg',
      name: 'Business Card Scanner',
      description:
        'No need to manage physical cards when you can save the contact details with our Business Card Scanner.',
    },
    {
      image: '/images/products/google_standee.jpeg',
      name: 'Google Standee',
      description:
        'Get your Business standout and increase your credibility of your business by having Smart NFC Google Standee for your Business.',
    },
    {
      image: '/images/products/whatsapp.png',
      name: 'Whatsapp Software Official',
      description:
        'Transform Your Business With WhatsApp that will help you to improve your Customer Relationship Management & Marketing Using Official WhatsApp Business APIs.',
    },
    {
      image: '/images/products/premium_linkedin.jpeg',
      name: 'Linkedin Premium',
      description:
        'Your Network is your Networth so the best way to increase your network and generate leads for your business is using Linkedin Business Premium where you can reach out to your target audience without any limitations.',
    },
    {
      image: '/images/products/google_review_card.jpeg',
      name: 'Google Review Card',
      description:
        'Get your Business standout and increase your credibility of your business by having Smart NFC Google Card for your Business where you can take reviews where you meet your customer easily through just one tap',
    },
    {
      image: '/images/products/instagram_card.jpeg',
      name: 'Instagram Card',
      description:
        'Increase you instagram page followers with our Smart NFC Insta Card such that your brand reach and engagement with your customers can increase.',
    },
    {
      image: '/images/products/facebook_card.jpeg',
      name: 'Facebook Card',
      description:
        'Increase you facebook page followers with our Smart NFC Facebook Card such that your brand reach and engagement with your customers can increase.',
    },
    {
      image: '/images/products/automatebusiness.jpg',
      name: 'Automate Business Software',
      description:
        'Automate CRM makes your entire sales process seamless – from lead capture to final conversion.',
    },
  ];

  getInTouch() {
    const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }
}
