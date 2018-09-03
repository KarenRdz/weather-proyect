import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  public results: any[] = [];
  city_list = ['Monterrey,N.L.','Oaxaca,MX','Guadalajara,MX','London,UK','Canada','Matamoros,MX','Querétaro,MX','Hawaii'];
  

  @Input()
  formStr: FormGroup

  constructor(private _WeatherService: WeatherService) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('cities'))){
      this.city_list[''];
      this.results = JSON.parse(localStorage.getItem('cities'));
    }
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
          localStorage.setItem('cities', JSON.stringify(this.results));
        })
      })
    })
  }

  public deleteCity(i){
    this.results.splice(i,1);
    localStorage.setItem('cities', JSON.stringify(this.results));
  }
}