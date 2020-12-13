import { BaseCreateDto } from '../../common/base-create.dto';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Campus } from '../../campus/campus.entity';

export class CourseCreateDto extends BaseCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly level: string;

  @IsString()
  @IsNotEmpty()
  readonly shift: string;

  @IsString()
  @IsNotEmpty()
  readonly kind: string;

  @IsNumber()
  @IsNotEmpty()
  readonly campus: Campus;
}
