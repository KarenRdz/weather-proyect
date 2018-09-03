import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _baseUrl = 'http://api.openweathermap.org/data/2.5/' as string;
  private _Apikey = 'e04c99056868fe2075919c78f9217dbd' as string;
  public units$: BehaviorSubject<string> = new BehaviorSubject('metric');
  
  constructor(private _http: Http) { }

  public getWeather(city: string, unit: string):
  Observable<any> {
    // api.openweathermap.org/data/2.5/find?q=Guadalajara&units=metric&APPID=e04c99056868fe2075919c78f9217dbd&lang=es //
    const url = `${this._baseUrl}find?q=${city}&units=${unit}&APPID=${this._Apikey}`;

    return this._http
    .get(url)
    .pipe(map (res => res.json().list)); 
  }
}

