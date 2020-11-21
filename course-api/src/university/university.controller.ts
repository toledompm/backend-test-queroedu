import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UniversityCreateDto } from './interface/university-create.dto';
import { UniversityResponseDto } from './interface/university-response.dto';
import { UniversityService } from './university.service';

@Controller('/university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() universityCreateDto: UniversityCreateDto,
  ): Promise<UniversityResponseDto> {
    return await this.universityService.createUniversity(universityCreateDto);
  }

  @Get(':name')
  async getByName(@Param('name') name: string): Promise<UniversityResponseDto> {
    return await this.universityService.getByName(name);
  }

  @Delete()
  async deleteById(@Body('id') id: number) {
    return await this.universityService.deleteById(id);
  }
}
