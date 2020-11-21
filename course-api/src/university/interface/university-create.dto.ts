import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UniversityCreateDto {
  @Expose()
  readonly name: string;

  @Expose()
  readonly logoUrl: string;

  readonly enabled = true;
}
