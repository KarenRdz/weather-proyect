import { Component, OnInit } from '@angular/core';
import {  WeatherService } from '../weather.service';
import {FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  formInput:FormGroup;
  constructor( private _weatherService: WeatherService,private form:FormBuilder) { 
    this.formInput = this.form.group({
      location: ['']
    });
  }

  ngOnInit() {
  }

  public changeUnits(units) {
    this._weatherService.units$.next(units);
  }

  public addLocation(){
    var nwLocation = this.formInput.get('location');
    var cityVal = nwLocation.value; 
    this._weatherService.cityName$.next(cityVal);
    this.formInput.reset();
  }
}
