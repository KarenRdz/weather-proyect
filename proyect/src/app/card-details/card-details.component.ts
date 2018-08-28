import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  public result: any[] = [];

  listado:any;

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
    this.getInfoDetails();
  }
  
  getInfoDetails(){
    this._weatherService.cityName$
    .subscribe(cityName =>{
      this.result = [];
      this._weatherService.units$
      .subscribe(units =>{
        this._weatherService.getCity(cityName,units)
        .subscribe(res =>{
          console.log("aqui",res);
          this.result.push(res);
          console.log("aqui2 ",res.list[0]);
          this.listado = res.list;
        },err => {
          console.error(err);
        });
      });
    });
  }

}
