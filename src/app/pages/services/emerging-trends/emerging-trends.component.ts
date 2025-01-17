import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-emerging-trends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emerging-trends.component.html',
  styleUrl: './emerging-trends.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmergingTrendsComponent {
  getInTouch() {
    const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }
}
