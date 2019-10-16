import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRiegosPage } from './log-riegos.page';

describe('LogRiegosPage', () => {
  let component: LogRiegosPage;
  let fixture: ComponentFixture<LogRiegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRiegosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRiegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
