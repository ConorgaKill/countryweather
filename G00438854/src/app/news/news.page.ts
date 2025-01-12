// Import required modules and components
import { Component, OnInit } from '@angular/core'; // Angular core module for components and lifecycle hooks
import { ActivatedRoute } from '@angular/router'; // Angular module to handle route parameters
import { HttpClient } from '@angular/common/http'; // Angular module for HTTP requests
import { IonicModule } from '@ionic/angular'; // Ionic-specific UI components
import { CommonModule } from '@angular/common'; // Common Angular utilities

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class NewsPage implements OnInit {
  // Country name passed from query parameters
  country: string = '';

  // News articles fetched from the API
  news: any[] = [];

  // Loading spinner state
  isLoading: boolean = false;

  // News API key
  apiKey: string = 'YOUR_API_KEY_HERE';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Fetch query parameters from the route
    this.route.queryParams.subscribe((params) => {
      this.country = params['country'] || '';

      if (this.country) {
        this.fetchNews(this.country);
      }
    });
  }

  fetchNews(country: string) {
    // Show loading spinner
    this.isLoading = true;

    // Construct API URL
    const url = `https://newsdata.io/api/1/news?apikey=${this.apiKey}&q=${country}`;

    // Fetch news data from API
    this.http.get(url).subscribe(
      (response: any) => {
        this.news = response.results || [];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching news:', error);
        this.isLoading = false;
      }
    );
  }
}
