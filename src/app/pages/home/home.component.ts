import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
declare var $:any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  getInTouch() {
    const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }
}
