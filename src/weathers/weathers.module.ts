import { Module } from '@nestjs/common';
import { WeathersController } from './weathers.controller';
import { WeathersService } from './weathers.service';

@Module({
  controllers: [WeathersController],
  providers: [WeathersService]
})
export class WeathersModule {}
