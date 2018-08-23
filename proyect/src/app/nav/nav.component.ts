import { Component, OnInit } from '@angular/core';
import {  WeatherService } from '../weather.service/weather.service.component'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private _weatherService: WeatherService ) { }

  ngOnInit() {
  }
  public changeUnits(units) {
    this._weatherService.units$.next(units);
  }

  public addLocation(nwCity){
}}
