import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-position-text',
  templateUrl: './position-text.component.html',
  styleUrls: ['./position-text.component.css']
})
export class PositionTextComponent {
@Input() textvalue = 3;
}
