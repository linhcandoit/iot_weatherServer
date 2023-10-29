import { Controller, Get, Param } from '@nestjs/common';
import { WeathersService } from './weathers.service';

@Controller('weatherDatas')
export class WeathersController {
    constructor(
        private readonly weathersService: WeathersService
    ) { }

    @Get()
    async getWeatherData(){
        const dataReturn = this.weathersService.getWeather()
        return dataReturn;  
    }

    @Get("/date/:date")
    async getWeatherDatasByDay(@Param("date") date: String){
        const dataReturn = this.weathersService.getWeatherByDay(date);
        return dataReturn;
    }

    @Get("/month/:month")
    async getWeatherDatasByMonth(@Param("month") month: String){
        const dataReturn = this.weathersService.getWeatherByMonth(month);
        return dataReturn;
    }

    @Get("/tempGreater/:temp")
    async getWeaterDatasTempGreaterThan(@Param("temp") temp : String){
        const temperature = Number(temp)
        const dataReturn = this.weathersService.getWeatherTemperatureGreaterThan(temperature)
        return dataReturn;
    }

    @Get("/tempSmaller/:temp")
    async getWeaterDatasTempSmallerThan(@Param("temp") temp : String){
        const temperature = Number(temp)
        const dataReturn = this.weathersService.getWeatherTemperatureSmallerThan(temperature)
        return dataReturn;
    }
}
