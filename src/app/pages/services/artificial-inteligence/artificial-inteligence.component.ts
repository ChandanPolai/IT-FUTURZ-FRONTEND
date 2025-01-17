import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-artificial-inteligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artificial-inteligence.component.html',
  styleUrl: './artificial-inteligence.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtificialInteligenceComponent {
  getInTouch(){
    const targetPosition = $('#getintouch').offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 800);
    $('#touch_fullName').focus();
  }
}
