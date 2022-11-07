import { Module } from '@nestjs/common';
import { TempsService } from './temps.service';
import { TempsController } from './temps.controller';

@Module({
  controllers: [TempsController],
  providers: [TempsService]
})
export class TempsModule {}
