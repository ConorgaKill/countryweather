import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: 'countries',
    loadComponent: () =>
      import('./countries/countries.page').then((m) => m.CountriesPage),
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/countries.page').then( m => m.CountriesPage)
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.page').then((m) => m.NewsPage),
  },   {
    path: 'news',
    loadComponent: () => import('./news/news.page').then( m => m.NewsPage)
  },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
 
  
];
