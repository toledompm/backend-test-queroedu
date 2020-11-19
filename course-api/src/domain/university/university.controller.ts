import { Controller, Body, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UniversityRepository } from './university.repository';
import { UniversityDto } from './interface/university.dto';

@Controller('/university')
export class UniversityController {
  constructor(
    @InjectRepository(UniversityRepository)
    private readonly universityRepository: UniversityRepository,
  ) {}

  @Post()
  create(@Body() universityDto: UniversityDto) {
    return this.universityRepository.createUniversity(universityDto);
  }
}
