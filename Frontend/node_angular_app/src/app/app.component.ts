import { Component } from '@angular/core';
import { Department } from 'src/models/department.model';
import { DepartmentService } from 'src/service/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'my-angular-app';
  constructor(private serv:DepartmentService){}
  depts: Department[] = [];
  errorMessage: string = '';



  clickMe(){
    this.serv.getPosts().subscribe({
      next: (data) => {
        this.depts = data;
        console.log('Data fetched successfully:', this.depts);
      },
      error: (error) => {
        this.errorMessage = 'Failed to fetch depts';
        console.error('Error fetching data:', error);
      }
    });
  }

}
