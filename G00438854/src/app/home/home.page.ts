import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For Angular directives
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // For Ionic components
import { RestCountriesService } from '../services/rest-countries.service';
import { NewsService } from '../services/news.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule], // Add CommonModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add schema for Ionic components
})
export class HomePage {
  countries: any[] = [];
  weather: any = null;
  news: any[] = [];

  constructor(
    private restCountriesService: RestCountriesService,
    private newsService: NewsService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    // Fetch countries with "Ireland" for demonstration
    this.restCountriesService.getCountriesByName('Ireland').subscribe(
      (data: any) => {
        this.countries = data;
      },
      (error: any) => {
        console.error('RestCountries API Error:', error);
      }
    );
  }

  getWeather(country: any) {
    const lat = country.latlng[0];
    const lon = country.latlng[1];

    this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
      (data: any) => {
        this.weather = data;
        console.log('Weather Data:', this.weather);
      },
      (error: any) => {
        console.error('Weather API Error:', error);
      }
    );
  }

  getNews(country: any) {
    const countryCode = country.cca2;

    this.newsService.getNewsByCountry(countryCode).subscribe(
      (data: any) => {
        this.news = data.results;
        console.log('News Data:', this.news);
      },
      (error: any) => {
        console.error('News API Error:', error);
      }
    );
  }
}
