import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Delete,
  Param,
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
    return (await this.universityService.createUniversity(
      universityCreateDto,
    )) as UniversityResponseDto;
  }

  @Get(':name')
  async getByName(@Param('name') name: string): Promise<UniversityResponseDto> {
    return (await this.universityService.getByName(
      name,
    )) as UniversityResponseDto;
  }

  @Delete()
  async deleteById(@Body('id') id: number): Promise<void> {
    return await this.universityService.deleteById(id);
  }

  @Put('/:name/update')
  async updateUniversity(
    @Param('name') name: string,
    @Body() universityCreateDto: UniversityCreateDto,
  ): Promise<void> {
    return await this.universityService.updateUniversity(
      name,
      universityCreateDto,
    );
  }
}
