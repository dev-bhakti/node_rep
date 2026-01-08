import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DepartmentService } from 'src/service/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: any[] = [];
  errorMessage: string = '';
  allData: any;

  constructor(private serv: DepartmentService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.fetchDepartments();
  }

  fetchDepartments() {
    this.http.get<any>('http://localhost:3000/api/departments/all-departments').subscribe(res => {
      console.log('Data fetched successfully:', res);
      // Assign the 'response' array to the departments property
      this.departments = res.response;
    });
  }

}
