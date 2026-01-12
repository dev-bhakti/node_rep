import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/models/pizza.model';
import { DepartmentService } from 'src/service/department.service';
import { PizzaService } from 'src/service/pizza.service';

@Component({
  selector: 'app-pizza-homepage',
  templateUrl: './pizza-homepage.component.html',
  styleUrls: ['./pizza-homepage.component.scss']
})
export class PizzaHomepageComponent implements OnInit {

  pizzas: Pizza[] = [];
  isLoading = false;

  errorMessage: string = '';
  allData: any;
  constructor(private pizzaService: PizzaService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPizzas();
  }

    fetchPizzas() {

    this.isLoading = true;
    this.errorMessage = '';

    this.pizzaService.fetchPizzas().subscribe({
      next: (res) => {
        console.log('Data fetched successfully:', res);
        this.pizzas = res.response; // assuming your API returns { response: [...] }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch pizzas', err);
        this.errorMessage = 'Failed to fetch pizzas. Please try again.';
        this.isLoading = false;
      }
    });
  }

}
