import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RestCountriesService } from '../services/rest-countries.service';
import { NewsService } from '../services/news.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allows Ionic custom elements
})
export class HomePage {
  constructor(
    private restCountriesService: RestCountriesService,
    private newsService: NewsService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    // Test RestCountries API
    this.restCountriesService.getCountriesByName('Ireland').subscribe(
      (data: any) => {
        console.log('RestCountries API Data:', data);
      },
      (error: any) => {
        console.error('RestCountries API Error:', error);
      }
    );

    // Test News API
    this.newsService.getNewsByCountry('IE').subscribe(
      (data: any) => {
        console.log('News API Data:', data);
      },
      (error: any) => {
        console.error('News API Error:', error);
      }
    );

    // Test Weather API
    this.weatherService
      .getWeatherByCoordinates('53.3498', '-6.2603')
      .subscribe(
        (data: any) => {
          console.log('Weather API Data:', data);
        },
        (error: any) => {
          console.error('Weather API Error:', error);
        }
      );
  }
}
