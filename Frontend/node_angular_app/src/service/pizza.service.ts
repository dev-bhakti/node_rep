import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { AddToCartResponse, CartItem, Pizza } from './../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

private readonly baseUrl = 'http://localhost:3000/api/pizzas';
private readonly baseUrl1 = 'http://localhost:3000/api/carts';


  constructor(private http: HttpClient) { }

  fetchPizzas(): Observable<{ response: Pizza[] }> {
    return this.http.get<{ response: Pizza[] }>(
      `${this.baseUrl}/all-pizzas`
    )
  }

  
addToCart(pizza: Pizza, quantity: number = 1): Observable<AddToCartResponse> {
    const body = { pizza_id: pizza.id, quantity };
    return this.http.post<AddToCartResponse>(`${this.baseUrl1}/cart/add`, body);
  }

  /**
   * Optional: get current cart (if you add GET /cart on server)
   */
  getCart(): Observable<AddToCartResponse> {
    return this.http.get<AddToCartResponse>(`${this.baseUrl1}/cart`);
  }

// getCartItems(cartId: string): Observable<CartItem> {
//   return this.http.get(`${this.baseUrl1}/${cartId}/items`);
// }


  // items: Pizza[] = [];

  // addToCart(pizza: Pizza) {
  //   this.items.push(pizza);
  // }

  // getItems() {
  //   return this.items;
  // }

  
 // Server-side add
  // addToCart(pizza: Pizza, quantity: number = 1): Observable<any> {
  //   const body = { pizza_id: pizza.id, quantity };
  //   return this.http.post(`${this.baseUrl}/cart/add`, body);
  // }

  // // Optional: get cart from server
  // getCart(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/cart`);
  // }


  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
// }



}