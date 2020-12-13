import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseRepository } from './course.repository';
import { CourseCreateDto } from './interface/course-create.dto';
import { CourseResponseDto } from './interface/course-response.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseRepository)
    private readonly courseRepository: CourseRepository,
  ) {}

  async createCourse(createDto: CourseCreateDto): Promise<CourseResponseDto> {
    return await this.courseRepository.save(createDto);
  }

  async getCourseById(CourseId: number): Promise<CourseResponseDto> {
    return await this.courseRepository.getById(CourseId);
  }

  async deleteById(id: number): Promise<void> {
    const Course = await this.courseRepository.getById(id);

    if (!Course) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    const updateResult = await this.courseRepository.softDeleteEntity(Course);

    if (updateResult.affected !== 1) {
      throw new HttpException(
        'Update Failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCourse(id: number, newCourse: CourseCreateDto): Promise<void> {
    const Course = await this.courseRepository.getById(id);

    if (!Course) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    const updateResult = await this.courseRepository.update(Course, newCourse);

    if (updateResult.affected !== 1) {
      throw new HttpException(
        'Update Failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
