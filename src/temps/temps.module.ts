import { Module } from '@nestjs/common';
import { TempsService } from './temps.service';
import { TempsController } from './temps.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Temp } from './entities/temp.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Temp])],
  controllers: [TempsController],
  providers: [TempsService],
  exports: [TempsService],
})
export class TempsModule {}
