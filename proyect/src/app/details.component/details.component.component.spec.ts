import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details.ComponentComponent } from './details.component.component';

describe('Details.ComponentComponent', () => {
  let component: Details.ComponentComponent;
  let fixture: ComponentFixture<Details.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
