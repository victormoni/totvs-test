import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [CommonModule],
})
export class SelectComponent {
  @Input() value = '';
  @Input() placeholder = 'Choose an option';
  @Input() disabled = false;
  @Input() hasError = false;
  @Input() options: { value: string; label: string }[] = [];

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.value = val;
    this.valueChange.emit(val);
  }
}
