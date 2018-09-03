import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  public result: any[] = [];

  public listado: any;
  public date: any[];

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
          this.listado = res.list;
          //console.log("lista: ",this.listado);
          this.newArray(this.listado);
        },err => {
          console.error(err);
        });
      });
    });
  }

  newArray(lista){
    console.log("lista ",lista);
    for(let lis of lista){
      var stringDiv =  lis.dt_txt.split(" ");
      // console.log("prueba ",stringDiv);
    }
  }
}
