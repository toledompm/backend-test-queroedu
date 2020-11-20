import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UniversityRepository } from './university.repository';
import { UniversityDto } from './interface/university.dto';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(UniversityRepository)
    private readonly universityRepository: UniversityRepository,
  ) {}

  async createUniversity(universityDto: UniversityDto): Promise<UniversityDto> {
    return await this.universityRepository.createUniversity(universityDto);
  }

  async getUniversityByName(universityName: string): Promise<UniversityDto> {
    return await this.universityRepository.getUniversityByName(universityName);
  }
}
