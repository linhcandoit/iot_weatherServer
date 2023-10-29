import { Injectable } from '@nestjs/common';
const moment = require('moment')

class WeatherData {
    temperature: String;
    humidity: String;
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

for (let i = 1; i < 100; i++) {
    let date = moment(startDate).add(8 * i, "hours").format("DD-MM-YYYY:HH");
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
}
