import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs';
@Injectable()
export class WeatherService {
  private _baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private _Apikey = 'e04c99056868fe2075919c78f9217dbd' ; 
  public units$: BehaviorSubject<string> = new BehaviorSubject('metric');

  constructor(private _http: HttpClient) { }

  public getWeather(city, units):
  Observable<any> {
    let params = new HttpParams().set('q', city).set('APPID', this._Apikey).set('units', units);

    return this._http.get(this._baseUrl,{params:params});
  }
}