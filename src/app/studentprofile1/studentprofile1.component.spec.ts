import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentprofile1Component } from './studentprofile1.component';

describe('Studentprofile1Component', () => {
  let component: Studentprofile1Component;
  let fixture: ComponentFixture<Studentprofile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studentprofile1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentprofile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
