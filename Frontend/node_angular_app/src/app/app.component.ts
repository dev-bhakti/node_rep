import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Department } from 'src/models/department.model';
import { DepartmentService } from 'src/service/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Angular Node App';
  departments: any[] = [];
  errorMessage: string = '';
  allData: any;

  constructor(private serv:DepartmentService,private http: HttpClient){}

  // ngOnInit():void  { // Add ngOnInit lifecycle hook
  //   this.clickMe(); // Call the data fetching method
  //   console.log(this.departments)
  // // }

   fetchDepartments() {
        this.http.get<any>('http://localhost:3000/api/departments/all-departments').subscribe(res => {
          console.log('Data fetched successfully:', res);
          // Assign the 'response' array to the departments property
          this.departments = res.response;
        });
      }

  // clickMe() {
  //   this.serv.getPosts().subscribe({
  //     // next: (data) => {
  //     //   this.departments = data;
  //     //   console.log('Data fetched successfully:', this.departments);
  //     //   // this.departments = Object.values(data);
  //     // },
  //     next: (response:Department[]) => {
  //       console.log(response, 'res');

  //       this.departments = response;
  //       console.log('Data fetched successfully:', this.departments);
  //       // this.departments = Object.values(data);
  //     },
  //     error: (error) => {
  //       this.errorMessage = 'Failed to fetch depts';
  //       console.error('Error fetching data:', error);
  //     }
  // });
  // }

}
