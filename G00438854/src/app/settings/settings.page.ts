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
  darkMode: boolean = false; // Default Dark Mode off

  constructor() {}

  ngOnInit() {
    // Load preferences from local storage
    const savedUnit = localStorage.getItem('selectedUnit');
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedUnit) {
      this.selectedUnit = savedUnit;
    }
    if (savedDarkMode) {
      this.darkMode = JSON.parse(savedDarkMode);
      this.applyDarkMode(this.darkMode);
    }
  }

  onUnitChange(event: any) {
    this.selectedUnit = event.detail.value;
    localStorage.setItem('selectedUnit', this.selectedUnit); // Save to local storage
    alert(`Selected unit: ${this.selectedUnit}`);
  }

  toggleDarkMode(event: any) {
    this.darkMode = event.detail.checked;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode)); // Save to local storage
    this.applyDarkMode(this.darkMode);
  }

  applyDarkMode(isDark: boolean) {
    document.body.classList.toggle('dark', isDark);
  }
}
