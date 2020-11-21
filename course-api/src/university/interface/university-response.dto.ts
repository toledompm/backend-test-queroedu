import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UniversityResponseDto {
  @Expose()
  readonly name: string;

  @Expose()
  readonly logoUrl: string;
}
