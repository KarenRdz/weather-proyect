import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service.component';

describe('Weather.ServiceComponent', () => {
  let component: WeatherService;
  let fixture: ComponentFixture<WeatherService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
