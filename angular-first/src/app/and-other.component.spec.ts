/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AndOtherComponent } from './and-other.component';

describe('AndOtherComponent', () => {
  let component: AndOtherComponent;
  let fixture: ComponentFixture<AndOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
