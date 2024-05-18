import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  constructor(private weatherService: WeatherService){}

  city: any;
  weatherData: any;

  ngOnInit(): void {
    
  }

  fetchWeather(){
    console.log(this.city)
    this.weatherService.getWeather(this.city).subscribe((res)=>{
      this.weatherData = res;
      console.log(res);
    })
  }


}
