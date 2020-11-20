import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { University } from './university.entity';
import { UniversityRepository } from './university.repository';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

@Module({
  imports: [TypeOrmModule.forFeature([University, UniversityRepository])],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
