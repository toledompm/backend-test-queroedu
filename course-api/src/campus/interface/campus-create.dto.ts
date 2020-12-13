import { BaseCreateDto } from '../../common/base-create.dto';
import { IsString, IsNotEmpty } from 'class-validator';
import { University } from '../../university/university.entity';

export class CampusCreateDto extends BaseCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsNotEmpty()
  readonly university: University;
}
