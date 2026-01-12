import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { AppComponent } from './app.component';
import { PizzaHomepageComponent } from './pizza-homepage/pizza-homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'pizzas', component:PizzaHomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
