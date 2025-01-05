import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://newsdata.io/api/1';
  private apiKey = 'pub_64147febbe94465d376d3c78101253a0c3e1d';

  constructor(private http: HttpClient) {}

  /**
   * Fetches news for a given country code.
   * @param countryCode - The country code (e.g., 'IE' for Ireland).
   * @returns Observable containing the news data.
   */
  getNewsByCountry(countryCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest`, {
      params: { apikey: this.apiKey, country: countryCode },
    });
  }
}
