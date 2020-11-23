import { Exclude, Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@Exclude()
export class CcampusCreateDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  readonly university_id: id;

  readonly enabled = true;
}
