import { BaseCreateDto } from '../../common/base-create.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UniversityCreateDto extends BaseCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly logoUrl: string;
}
