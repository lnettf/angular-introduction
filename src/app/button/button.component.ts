import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text = 'example';
  @Output() clickEvent = new EventEmitter();

  clickButton() {
    this.clickEvent.emit();
  }
}
