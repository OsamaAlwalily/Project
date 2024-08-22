import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrereComponent } from './carrere.component';

describe('CarrereComponent', () => {
  let component: CarrereComponent;
  let fixture: ComponentFixture<CarrereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
