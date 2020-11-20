import { Controller, Body, Post, Get } from '@nestjs/common';
import { UniversityDto } from './interface/university.dto';
import { UniversityService } from './university.service';

@Controller('/university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post()
  async create(@Body() universityDto: UniversityDto): Promise<UniversityDto> {
    return await this.universityService.createUniversity(universityDto);
  }

  @Get()
  async getUniversityByName(): Promise<UniversityDto> {
    return await this.universityService.getUniversityByName(
      'some made up name',
    );
  }
}
