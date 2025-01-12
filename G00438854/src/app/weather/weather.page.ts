// Import required modules and components
import { Component, OnInit } from '@angular/core'; // Angular core module for components and lifecycle hooks
import { ActivatedRoute } from '@angular/router'; // Angular module to handle route parameters
import { HttpClient } from '@angular/common/http'; // Angular module for HTTP requests
import { IonicModule } from '@ionic/angular'; // Ionic-specific UI components
import { CommonModule } from '@angular/common'; // Common Angular utilities

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class WeatherPage implements OnInit {
  // Country and capital passed from query parameters
  country: string = '';
  capital: string = '';

  // Weather information fetched from the API
  weather: any = null;

  // Loading spinner state
  isLoading: boolean = false;

  // Weather API key
  apiKey: string = 'YOUR_API_KEY_HERE';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Fetch query parameters from the route
    this.route.queryParams.subscribe((params) => {
      this.country = params['country'] || '';
      this.capital = params['capital'] || '';

      if (this.capital) {
        this.fetchWeather(this.capital);
      }
    });
  }

  fetchWeather(capital: string) {
    // Show loading spinner
    this.isLoading = true;

    // Construct API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${this.apiKey}`;

    // Fetch weather data from API
    this.http.get(url).subscribe(
      (response: any) => {
        this.weather = response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching weather:', error);
        this.isLoading = false;
      }
    );
  }
}
