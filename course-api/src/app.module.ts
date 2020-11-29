import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityModule } from './university/university.module';
import { CampusModule } from './campus/campus.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UniversityModule, CampusModule],
})
export class AppModule {}
