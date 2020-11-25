import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminologyComponent } from './criminology.component';

describe('CriminologyComponent', () => {
  let component: CriminologyComponent;
  let fixture: ComponentFixture<CriminologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
