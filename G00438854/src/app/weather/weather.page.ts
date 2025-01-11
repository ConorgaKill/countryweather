import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class WeatherPage implements OnInit {
  country: string = '';
  capital: string = '';
  weather: any = null;
  isLoading: boolean = false;
  apiKey: string = '1241c3c9656af38a8d8289304bb8c7f1';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.country = params['country'] || '';
      this.capital = params['capital'] || '';
      if (this.capital) {
        this.fetchWeather(this.capital);
      }
    });
  }

  fetchWeather(capital: string) {
    this.isLoading = true;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${this.apiKey}`;

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
