import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public results: any[];
  

  constructor(private _WeatherService: WeatherService) { }

  ngOnInit() {
  this._WeatherService.getWeather('Monterrey, nuevo leon')
  .subscribe(res => {
    console.log(res);
    this.results = res;
  },
  err => {
    console.error(err);
  });
}}