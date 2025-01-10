import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class HomePage {
  countryName: string = ''; // Bound to the input field in home.page.html

  constructor(private router: Router) {}

  searchCountry() {
    if (this.countryName) {
      // Navigate to the Countries Page with the entered country name as a query parameter
      this.router.navigate(['/countries'], { queryParams: { name: this.countryName } });
    } else {
      alert('Please enter a country name!');
    }
  }
}
