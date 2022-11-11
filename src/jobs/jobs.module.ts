import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Job } from './entities/job.entity';
import { TempsService } from 'src/temps/temps.service';
import { Temp } from 'src/temps/entities/temp.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Job, Temp])],
  controllers: [JobsController],
  providers: [JobsService, TempsService],
})
export class JobsModule {}
