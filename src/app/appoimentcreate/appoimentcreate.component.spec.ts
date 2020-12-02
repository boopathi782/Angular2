import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimentcreateComponent } from './appoimentcreate.component';

describe('AppoimentcreateComponent', () => {
  let component: AppoimentcreateComponent;
  let fixture: ComponentFixture<AppoimentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoimentcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoimentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
