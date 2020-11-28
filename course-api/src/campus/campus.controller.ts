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
import { CampusService } from './campus.service';
import { CampusCreateDto } from './interface/campus-create.dto';
import { CampusResponseDto } from './interface/campus-response.dto';

@Controller('/campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Get(':id')
  async getCampusById(@Param('id') id: number): Promise<CampusResponseDto> {
    return this.campusService.getCampusById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCampus(
    @Body() campusCreateDto: CampusCreateDto,
  ): Promise<CampusResponseDto> {
    return this.campusService.createCampus(campusCreateDto);
  }

  @Put(':id/update')
  async updateCampus(
    @Param('id') id: number,
    @Body() newCampusDto: CampusCreateDto,
  ): Promise<void> {
    return this.campusService.updateCampus(id, newCampusDto);
  }

  @Delete()
  async deleteCampus(@Body('id') id: number): Promise<void> {
    return this.campusService.deleteById(id);
  }
}
