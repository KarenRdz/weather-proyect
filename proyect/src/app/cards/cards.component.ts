import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {WeatherService} from '../weather.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public results: any[] = [];
  city_list = ['Monterrey,MX','Oaxaca,MX','Guadalajara,MX','London,UK','Canada','Matamoros,MX','Querétaro,MX','Hawaii'];
  

  @Input()
  formStr: FormGroup

  ejemplo = false;

  constructor(private _WeatherService: WeatherService) { }

  ngOnInit() {
    this.initialInfo();
    this.addCity();
  }

  initialInfo(){
    for(let i = 0; i< this.city_list.length; i++){
      this._WeatherService.units$.subscribe(units => {
        this.results = [];
        this._WeatherService.getWeather(this.city_list[i], units)
        .subscribe(res => {
          console.log(res);
          this.results.push(res);      
        },
        err => {
          console.error(err);
        });
      });
      
    }
  }

  sendInfo(cityName){
    this._WeatherService.cityName$.next(cityName);
  }

  public addCity(){
    this._WeatherService.units$.subscribe(units => {
      this._WeatherService.cityName$.subscribe(cityName =>{
        this._WeatherService.getWeather(cityName,units).subscribe(data =>{
          this.results.push(data);
          this.city_list.push(cityName);
        })
      })
    })
  }

  public deleteCity(i){
    this.results.splice(i,1);
  }
}