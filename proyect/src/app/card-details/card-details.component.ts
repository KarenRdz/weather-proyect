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
  public dias: any[];

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
          // console.log("aqui",res);
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

  groupBy(arr,prop){
    let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return arr.reduce(function(groups, item) {
          const valAnt = item[prop];
          const val = valAnt.split(" ");
          // var dateStr = new Date(val[0]);
          // var gDay = dateStr.getDay();
          // arr.prototype.day = week[gDay];
          groups[val[0]] = groups[val[0]] || []
          groups[val[0]].push(item)
          return groups
    }, {})
  }

  newArray(lista){
     console.log("lista ",lista);
    let stringDiv,dateStr, gDay,day,dayAcum;
    let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    this.dias = this.groupBy(lista,"dt_txt");
    console.log(this.dias);
  }
}
