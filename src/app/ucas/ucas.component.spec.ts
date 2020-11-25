import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCASComponent } from './ucas.component';

describe('UCASComponent', () => {
  let component: UCASComponent;
  let fixture: ComponentFixture<UCASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
