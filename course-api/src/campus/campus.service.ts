import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CampusRepository } from './campus.repository';
import { CampusCreateDto } from './interface/campus-create.dto';
import { CampusResponseDto } from './interface/campus-response.dto';

@Injectable()
export class CampusService {
  constructor(
    @InjectRepository(CampusRepository)
    private readonly campusRepository: CampusRepository,
  ) {}

  async createCampus(createDto: CampusCreateDto): Promise<CampusResponseDto> {
    return await this.campusRepository.save(createDto);
  }

  async getCampusById(campusId: number): Promise<CampusResponseDto> {
    return await this.campusRepository.getById(campusId);
  }

  async deleteById(id: number): Promise<void> {
    const campus = await this.campusRepository.getById(id);

    if (!campus) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    const updateResult = await this.campusRepository.softDeleteEntity(campus);

    if (updateResult.affected !== 1) {
      throw new HttpException(
        'Update Failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCampus(id: number, newCampus: CampusCreateDto): Promise<void> {
    const campus = await this.campusRepository.getById(id);

    if (!campus) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    const updateResult = await this.campusRepository.update(campus, newCampus);

    if (updateResult.affected !== 1) {
      throw new HttpException(
        'Update Failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
