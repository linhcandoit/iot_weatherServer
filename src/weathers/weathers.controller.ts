import { Controller, Get } from '@nestjs/common';
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
}
