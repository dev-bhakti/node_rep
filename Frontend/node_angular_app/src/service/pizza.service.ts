import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Pizza } from './../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

private readonly baseUrl = 'http://localhost:3000/api/pizzas';

  constructor(private http: HttpClient) { }

  fetchPizzas(): Observable<{ response: Pizza[] }> {
    return this.http.get<{ response: Pizza[] }>(
      `${this.baseUrl}/all-pizzas`
    )
  }
}
