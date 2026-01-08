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
    this.http.get<any>('http://localhost:3000/api/departments/all-departments').subscribe(res => {
      console.log('Data fetched successfully:', res);
      // Assign the 'response' array to the departments property
      this.departments = res.response;
    });
  }
}
function signal<T>(arg0: never[]) {
  throw new Error('Function not implemented.');
}

