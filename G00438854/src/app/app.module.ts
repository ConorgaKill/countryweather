import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Add IonicModule
    FormsModule, // Required for two-way binding
    RouterModule.forRoot([]), // Routes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
