import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  /**
   * Fetches countries matching the given name.
   * @param name - The name or part of the name of the country.
   * @returns Observable containing the list of matching countries.
   */
  getCountriesByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }
}
