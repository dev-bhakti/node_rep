import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsComponent } from './departments/departments.component';
import { PizzaHomepageComponent } from './pizza-homepage/pizza-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    PizzaHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
