import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './domain/university/university.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UniversityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
