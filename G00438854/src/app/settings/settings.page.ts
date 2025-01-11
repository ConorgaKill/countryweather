import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SettingsPage {
  units: string[] = ['Metric', 'Imperial'];
  selectedUnit: string = 'Metric'; // Default unit

  constructor() {}

  onUnitChange(event: any) {
    this.selectedUnit = event.detail.value;
    alert(`Selected unit: ${this.selectedUnit}`);
  }

  toggleDarkMode(event: any) {
    const isDarkMode = event.detail.checked;
    document.body.classList.toggle('dark', isDarkMode);
  }
}
