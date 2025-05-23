import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchComponent } from '../../components/switch/switch.component';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule, SwitchComponent, SelectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ativo = false;
  selectedOption = '';
  isDisabled = false;
  hasError = false;

  onToggle(val: boolean) {
    console.log('Switch:', val);
  }

  options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: 'desativar', label: 'Desativar o seletor' },
    { value: 'erro', label: 'Forçar erro' },
  ];

  onSelectChange(value: string) {
    this.selectedOption = value;
    this.hasError = value === 'erro';
    console.log('Selecionado:', value);
    if (value === 'desativar') {
      this.isDisabled = true;
    }
    this.hasError = value === 'erro';
  }
}
