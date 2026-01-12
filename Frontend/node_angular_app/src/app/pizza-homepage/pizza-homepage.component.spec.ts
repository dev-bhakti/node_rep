import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaHomepageComponent } from './pizza-homepage.component';

describe('PizzaHomepageComponent', () => {
  let component: PizzaHomepageComponent;
  let fixture: ComponentFixture<PizzaHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
