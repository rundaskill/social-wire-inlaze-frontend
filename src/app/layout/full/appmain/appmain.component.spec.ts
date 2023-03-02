/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppmainComponent } from './appmain.component';

describe('AppmainComponent', () => {
  let component: AppmainComponent;
  let fixture: ComponentFixture<AppmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
