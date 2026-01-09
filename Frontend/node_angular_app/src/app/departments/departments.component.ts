import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/models/department.model';
import { DepartmentService } from 'src/service/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[] = [];
  isLoading = false;

  errorMessage: string = '';
  allData: any;

  constructor(private departmentService: DepartmentService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.fetchDepartments();
  }

  fetchDepartments() {

    this.isLoading = true;
    this.errorMessage = '';

    this.departmentService.fetchDepartments().subscribe({
      next: (res) => {
        console.log('Data fetched successfully:', res);
        this.departments = res.response; // assuming your API returns { response: [...] }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch departments', err);
        this.errorMessage = 'Failed to fetch departments. Please try again.';
        this.isLoading = false;
      }
    });
  }

}
