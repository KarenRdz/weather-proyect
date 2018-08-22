import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service/weather.service.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public results: any[];

  constructor(private _WeatherService: WeatherService) { }

  ngOnInit() {
  this._WeatherService.getWeather('Monterrey', 'metric', 'es')
  .subscribe(res => {
    console.log(res);
    this.results = res;
  },
  err => {
    console.error(err);
  });
}}
