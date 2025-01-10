import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class HomePage {
  countryName: string = '';

  constructor() {}

  searchCountry() {
    if (this.countryName) {
      alert(`Search initiated for: ${this.countryName}`);
    } else {
      alert('Please enter a country name!');
    }
  }
}
