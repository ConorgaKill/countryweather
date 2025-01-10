import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CountriesPage implements OnInit {
  searchQuery: string = '';
  countries: any[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['name'] || '';
      if (this.searchQuery) {
        this.fetchCountries(this.searchQuery);
      }
    });
  }

  fetchCountries(query: string) {
    this.isLoading = true;
    this.http
      .get(`https://restcountries.com/v3.1/name/${query}`)
      .subscribe(
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
