import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyYearsComponent } from './early-years.component';

describe('EarlyYearsComponent', () => {
  let component: EarlyYearsComponent;
  let fixture: ComponentFixture<EarlyYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
