import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-business-consulting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-consulting.component.html',
  styleUrl: './business-consulting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessConsultingComponent {
  getInTouch() {
    const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }
}
