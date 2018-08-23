import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service/weather.service.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.component.html',
  
})
export class DashComponent implements OnInit {

  public results: any[] = [];
  city_list = ['Monterrey,MX','Oaxaca,MX','Guadalajara,MX','Victoria,MX','Reynosa,MX','Matamoros,MX','Queretaro,MX','Tampico,MX'];

  constructor(private _WeatherService: WeatherService) { }

  ngOnInit() {
    this.initialInfo();
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
}