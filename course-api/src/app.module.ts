import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityModule } from './university/university.module';
import { CampusModule } from './campus/campus.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UniversityModule,
    CampusModule,
    CourseModule,
  ],
})
export class AppModule {}
