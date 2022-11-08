import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Job } from './entities/job.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Job])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
