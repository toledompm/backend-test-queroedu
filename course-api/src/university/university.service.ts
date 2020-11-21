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

  async deleteById(id): Promise<any> {
    const university = await this.universityRepository.getById(id);

    if (!university) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return await this.universityRepository.softDeleteUniversity(university);
  }

  async updateUniversity(
    name: string,
    universityCreateDto: UniversityCreateDto,
  ): Promise<UniversityResponseDto> {
    const university = await this.universityRepository.getByName(name);

    if (!university) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    const updateResult = await this.universityRepository.updateUniversity(
      university,
      universityCreateDto,
    );

    if (updateResult.affected !== 1) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }

    return await this.universityRepository.getById(university.id);
  }
}
