// Import required modules and components
import { Component } from '@angular/core'; // Angular core module for defining components
import { IonicModule } from '@ionic/angular'; // Ionic-specific UI components
import { CommonModule } from '@angular/common'; // Common Angular utilities
import { FormsModule } from '@angular/forms'; // Module for handling forms and inputs in Angular

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SettingsPage {
  // Available units for temperature
  units: string[] = ['Metric', 'Imperial'];

  // Default selected unit
  selectedUnit: string = 'Metric';

  // Dark mode toggle state
  darkMode: boolean = false;

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
    // Update selected unit and save it to local storage
    this.selectedUnit = event.detail.value;
    localStorage.setItem('selectedUnit', this.selectedUnit);
    alert(`Selected unit: ${this.selectedUnit}`);
  }

  toggleDarkMode(event: any) {
    // Toggle dark mode state and save it to local storage
    this.darkMode = event.detail.checked;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    this.applyDarkMode(this.darkMode);
  }

  applyDarkMode(isDarkMode: boolean) {
    // Add or remove the dark mode class on the body element
    document.body.classList.toggle('dark', isDarkMode);
  }
}
