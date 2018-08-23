import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs';
@Injectable()
export class WeatherService {
  private _baseUrl = 'http://api.openweathermap.org/data/2.5/';
  private _Apikey = 'e04c99056868fe2075919c78f9217dbd' ; 
  public units$: BehaviorSubject<string> = new BehaviorSubject('metric');
  public cityName$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private _http: HttpClient) { }

  public getWeather(city, units):
  Observable<any> {
    //http://api.openweathermap.org/data/2.5/weather?q=seattle &units=imperial 

    let params = new HttpParams().set('q', city).set('APPID', this._Apikey).set('units', units);

    return this._http.get(this._baseUrl+'weather',{params:params});
  }

  public getCity(cityName,units):
  Observable<any> {
    //http://api.openweathermap.org/data/2.5/weather?q=seattle &units=imperial
    //api.openweathermap.org/data/2.5/forecast?q=London,us 
    let param = new HttpParams().set('q', cityName).set('APPID', this._Apikey).set('units', units);
    return this._http.get(this._baseUrl+'forecast',{params:param});

  }
}