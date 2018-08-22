import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather.ServiceComponent } from './weather.service.component';

describe('Weather.ServiceComponent', () => {
  let component: Weather.ServiceComponent;
  let fixture: ComponentFixture<Weather.ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather.ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
