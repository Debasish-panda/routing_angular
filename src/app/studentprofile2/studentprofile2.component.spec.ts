import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentprofile2Component } from './studentprofile2.component';

describe('Studentprofile2Component', () => {
  let component: Studentprofile2Component;
  let fixture: ComponentFixture<Studentprofile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studentprofile2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentprofile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
