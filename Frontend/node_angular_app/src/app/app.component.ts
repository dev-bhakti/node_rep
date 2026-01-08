import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showDeptButton: boolean = true;
  showHomeButton:boolean= false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Subscribe to router events and filter for NavigationEnd events
    
  }

  currentUrl :string = '/';

    isHomePage(): boolean {
    return this.currentUrl === '/';
  }

  isDepartmentsPage(): boolean {
    return this.currentUrl === '/departments';
  }
 }
