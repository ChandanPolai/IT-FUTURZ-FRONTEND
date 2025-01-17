import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-product-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-development.component.html',
  styleUrl: './product-development.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDevelopmentComponent {
  getInTouch() {
    const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }
}
