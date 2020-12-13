import {
  Controller,
  Body,
  Post,
  Put,
  Delete,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseCreateDto } from './interface/course-create.dto';
import { CourseResponseDto } from './interface/course-response.dto';

@Controller('/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get(':id')
  async getCourseById(@Param('id') id: number): Promise<CourseResponseDto> {
    return this.courseService.getCourseById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCourse(
    @Body() CourseCreateDto: CourseCreateDto,
  ): Promise<CourseResponseDto> {
    return this.courseService.createCourse(CourseCreateDto);
  }

  @Put(':id/update')
  async updateCourse(
    @Param('id') id: number,
    @Body() newCourseDto: CourseCreateDto,
  ): Promise<void> {
    return this.courseService.updateCourse(id, newCourseDto);
  }

  @Delete()
  async deleteCourse(@Body('id') id: number): Promise<void> {
    return this.courseService.deleteById(id);
  }
}
