import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityModule } from './university/university.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UniversityModule],
})
export class AppModule {}
