import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // isDeptPage:boolean = false;
  isPizzaPage:boolean = false;
  constructor(private router: Router) {}
  
  ngOnInit(): void {
  this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event:any)=>{
    // this.isDeptPage = event.urlAfterRedirects.includes('/departments')
    this.isPizzaPage = event.urlAfterRedirects.includes('/pizzas')
  });
  }
  
  // goToDepartment(){
  //   this.router.navigate(['/departments'])
  // }

   goToHome(){
    this.router.navigate(['/'])
  }

  goToPizza(){
    this.router.navigate(['/pizzas'])
  }

 }
