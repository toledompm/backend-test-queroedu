import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UniversityRepository } from './university.repository';
import { UniversityCreateDto } from './interface/university-create.dto';
import { UniversityResponseDto } from './interface/university-response.dto';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(UniversityRepository)
    private readonly universityRepository: UniversityRepository,
  ) {}

  async createUniversity(
    universityCreateDto: UniversityCreateDto,
  ): Promise<UniversityResponseDto> {
    return await this.universityRepository.createUniversity(
      universityCreateDto,
    );
  }

  async getByName(universityName: string): Promise<UniversityResponseDto> {
    const university = await this.universityRepository.getByName(
      universityName,
    );

    if (university === undefined) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return university;
  }

  async deleteById(id) {
    const university = await this.universityRepository.getById(id);

    if (!university) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return await this.universityRepository.deleteUniversity(university);
  }
}
