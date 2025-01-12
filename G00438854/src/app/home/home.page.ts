// Import required modules and components
import { Component } from '@angular/core'; // Angular core module for components
import { IonicModule } from '@ionic/angular'; // Ionic-specific UI components
import { CommonModule } from '@angular/common'; // Common Angular utilities
import { FormsModule } from '@angular/forms'; // Angular module for handling forms and inputs
import { RouterModule, Router } from '@angular/router'; // Angular router modules for navigation

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class HomePage {
  // Bound to the input field in home.page.html
  countryName: string = '';

  constructor(private router: Router) {}

  searchCountry() {
    if (this.countryName) {
      // Navigate to the Countries Page with the entered country name as a query parameter
      this.router.navigate(['/countries'], { queryParams: { name: this.countryName } });
    } else {
      // Show an alert if no country name is entered
      alert('Please enter a country name!');
    }
  }
}
