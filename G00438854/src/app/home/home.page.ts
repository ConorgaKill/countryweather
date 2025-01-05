import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule], // Add RouterModule here
})
export class HomePage {
  countryName: string = '';

  constructor() {}

  searchCountries() {
    if (this.countryName.trim().length > 0) {
      console.log(`Searching for country: ${this.countryName}`);
    } else {
      alert('Please enter a country name.');
    }
  }
}
