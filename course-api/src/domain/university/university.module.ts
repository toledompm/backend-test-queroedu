import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { University } from './university.entity';
import { UniversityRepository } from './university.repository';
import { UniversityController } from './university.controller';

@Module({
  imports: [TypeOrmModule.forFeature([University, UniversityRepository])],
  controllers: [UniversityController],
})
export class UniversityModule {}
