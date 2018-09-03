import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard.ComponentComponent } from './dashboard.component.component';

describe('Dashboard.ComponentComponent', () => {
  let component: Dashboard.ComponentComponent;
  let fixture: ComponentFixture<Dashboard.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
