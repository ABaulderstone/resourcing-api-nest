import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TempsModule } from './temps/temps.module';

@Module({
  imports: [TempsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
