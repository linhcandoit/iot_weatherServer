import { Injectable } from '@nestjs/common';
const moment = require('moment')

class WeatherData {
    temperature: Number;
    humidity: Number;
    date: String;
    constructor(date, temperature, humidity) {
        this.date = date;
        this.temperature = temperature;
        this.humidity = humidity;
    }
}

/*
    expect:     
        temperature in range 20 - 30
        humidity 60% - 80%
*/

let weatherDatas : WeatherData[] = []
let startDate = moment("2022-12-02");

for (let i = 1; i < 500; i++) {
    let date = moment(startDate).add(8 * i, "hours").format("YYYY-MM-DDTHH:00");
    let temperature = Math.random() * 10 + 20;
    let humidity = Math.random() * 20 + 60
    let weatherData = new WeatherData(date, temperature, humidity);
    weatherDatas.push(weatherData)
}


@Injectable()
export class WeathersService {
    private weatherDatas = weatherDatas;

    getWeather() {
        return this.weatherDatas;
    }

    getWeatherByDay(day: String){
        let weatherByDay : WeatherData[] = []; 
        this.weatherDatas.forEach(data => {
            if(moment(data.date).format("YYYY-MM-DD") == moment(day).format("YYYY-MM-DD")){
                weatherByDay.push(data);
            }
        })
        return weatherByDay;
    }

    getWeatherByMonth(month: String){
        let weatherByMonth : WeatherData[] = []; 
        this.weatherDatas.forEach(data => {
            if(moment(data.date).format("YYYY-MM") == moment(month).format("YYYY-MM")){
                weatherByMonth.push(data);
            }
        })
        return weatherByMonth;
    }
    getWeatherTemperatureGreaterThan(temperature : Number){
        let days : WeatherData[] = [];
        this.weatherDatas.forEach(data => {
            if(data.temperature >= temperature) {
                days.push(data)
            }
        })
        return days;
    }

    getWeatherTemperatureSmallerThan(temperature : Number){
        let days : WeatherData[] = [];
        this.weatherDatas.forEach(data => {
            if(data.temperature <= temperature) {
                days.push(data)
            }
        })
        return days;
    }
}
