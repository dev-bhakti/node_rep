import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartItem, Pizza } from 'src/models/pizza.model';
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
  cart: CartItem[] = [];
  errorMessage: string = '';
  allData: any;
  product: Pizza[]=[]; // Assume you have a product loaded here
  successMsg!: string;

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



//   addToCart(pizza: any) {
//     // this.pizzaService.addToCart(pizza);
    
// // addPizza(pizza: Pizza) {
//     this.pizzaService.addToCart(pizza, 1).subscribe({
//       next: (res) => console.log('Added to cart:', res),
//       error: (err) => console.error('Add to cart error:', err),
//     });
//   // }

//     window.alert('Your product has been added to the cart!'); // Optional: provide user feedback
//   }

addToCart(pizza: Pizza, quantity: number = 1) {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMsg = '';

    this.pizzaService.addToCart(pizza, quantity).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success) {
          this.successMsg = res.message;
          this.cart = res.cart;
        } else {
          this.errorMessage = res.message || 'Failed to add to cart';
        }
      },
      error: (err) => {
        this.isLoading = false;
        // Prefer server's message if present
        this.errorMessage = err?.error?.message || 'Something went wrong while adding to cart';
        console.error('Add to cart error:', err);
      }
    });
    this.pizzaService.getCart();
  }


}
