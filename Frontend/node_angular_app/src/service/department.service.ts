import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Department } from './../models/department.model';


@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  private baseUrl = 'http://localhost:3000/api/departments/all-departments';
  constructor(private http: HttpClient) { }


  departments: any[] = [];
  getPosts(): any {

    // return this.http.get<Department[]>(`${this.baseUrl}`).pipe(
    //   map(response => response) // Transform data if needed
    // );
    this.http.get<any>('http://localhost:3000/api/departments/all-departments').subscribe(res => {
      console.log('Data fetched successfully:', res);
      // Assign the 'response' array to the departments property
      this.departments = res.response;
    });

//   getAll(): Observable<Department[]> {
//     // return this.http.get<Department[]>(baseUrl);
//      console.log('baseUrl',);
// const response =  fetch(baseUrl);
//     console.log(response, response)
//      return this.http.get<Department[]>(`${baseUrl}`)

//       }

//     private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.error}`);
//     }
//     // return an observable with a user-facing error message
//     return throwError(
//       'Something bad happened; please try again later.');
//   };
  }
}
function signal<T>(arg0: never[]) {
  throw new Error('Function not implemented.');
}

