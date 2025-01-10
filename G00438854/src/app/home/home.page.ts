import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  countryName: string = ''; // To bind with ngModel

  constructor(private router: Router) {}

  searchCountries() {
    if (this.countryName.trim()) {
      this.router.navigate(['/countries'], {
        queryParams: { name: this.countryName },
      });
    }
  }
}
