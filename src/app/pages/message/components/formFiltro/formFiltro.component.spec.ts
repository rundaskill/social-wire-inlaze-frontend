/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormFiltroComponent } from './formFiltro.component';

describe('FormFiltroComponent', () => {
  let component: FormFiltroComponent;
  let fixture: ComponentFixture<FormFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
