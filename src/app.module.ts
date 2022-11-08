import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TempsModule } from './temps/temps.module';
import { JobsModule } from './jobs/jobs.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forRoot(), TempsModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
