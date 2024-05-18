import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private API_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric';

  private api_key = '63644768143343cad3c6b1d3889e2998'

  constructor(private _http: HttpClient) { }


  getWeather(city: string){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric`);
  }
}
