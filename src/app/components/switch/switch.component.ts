import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchComponent,
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() disabled = false;
  @Output() toggled = new EventEmitter<boolean>();

  checked = false;
  onChange = (_: any) => {};
  onTouched = () => {};

  toggle(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.toggled.emit(this.checked);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
