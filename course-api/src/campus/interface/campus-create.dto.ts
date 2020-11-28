import { BaseCreateDto } from '../../common/base-create.dto';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CampusCreateDto extends BaseCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsNumber()
  @IsNotEmpty()
  readonly university_id: number;
}
