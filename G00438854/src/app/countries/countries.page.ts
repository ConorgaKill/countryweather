// Import required modules and components
import { Component, OnInit } from '@angular/core'; // Angular core module for components and lifecycle hooks
import { HttpClient } from '@angular/common/http'; // Angular module for HTTP requests
import { ActivatedRoute } from '@angular/router'; // Angular module to handle route parameters
import { IonicModule } from '@ionic/angular'; // Ionic-specific UI components
import { CommonModule } from '@angular/common'; // Common Angular utilities
import { RouterModule } from '@angular/router'; // Angular module for router functionalities

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class CountriesPage implements OnInit {
  // The search query for filtering countries
  searchQuery: string = '';

  // List of countries fetched from the API
  countries: any[] = [];

  // Loading spinner state
  isLoading: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetch query parameters from the route
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['name'] || '';

      if (this.searchQuery) {
        this.fetchCountries(this.searchQuery);
      }
    });
  }

  fetchCountries(query: string) {
    // Show loading spinner
    this.isLoading = true;

    // Fetch countries data from REST API
    this.http.get(`https://restcountries.com/v3.1/name/${query}`).subscribe(
      (response: any) => {
        this.countries = response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching countries:', error);
        this.isLoading = false;
      }
    );
  }
}
