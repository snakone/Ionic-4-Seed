import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404Page } from './error404.page';

describe('Error404Page', () => {
  let component: Error404Page;
  let fixture: ComponentFixture<Error404Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error404Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
