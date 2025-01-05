import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '1241c3c9656af38a8d8289304bb8c7f1';

  constructor(private http: HttpClient) {}

  /**
   * Fetches weather data based on coordinates.
   * @param lat - Latitude of the location.
   * @param lon - Longitude of the location.
   * @param units - Units (metric or imperial).
   * @returns Observable containing the weather data.
   */
  getWeatherByCoordinates(
    lat: string,
    lon: string,
    units: string = 'metric'
  ): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        lat,
        lon,
        units,
        appid: this.apiKey,
      },
    });
  }
}
