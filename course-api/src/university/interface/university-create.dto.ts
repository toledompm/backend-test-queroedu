import { Exclude, Expose } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

@Exclude()
export class UniversityCreateDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly logoUrl: string;

  readonly enabled = true;
}
