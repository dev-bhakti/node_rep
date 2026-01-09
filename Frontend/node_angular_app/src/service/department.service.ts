import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Department } from './../models/department.model';


@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  private readonly baseUrl = 'http://localhost:3000/api/departments';

  constructor(private http: HttpClient) { }

  fetchDepartments(): Observable<{ response: Department[] }> {
    return this.http.get<{ response: Department[] }>(
      `${this.baseUrl}/all-departments`
    )
  }
}

