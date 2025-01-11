import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class NewsPage implements OnInit {
  country: string = '';
  news: any[] = [];
  isLoading: boolean = false;
  apiKey: string = 'pub_64147febbe94465d376d3c78101253a0c3e1d'; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.country = params['country'] || '';
      if (this.country) {
        this.fetchNews(this.country);
      }
    });
  }

  fetchNews(country: string) {
    this.isLoading = true;
    const url = `https://newsdata.io/api/1/news?apikey=${this.apiKey}&q=${country}`;

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
