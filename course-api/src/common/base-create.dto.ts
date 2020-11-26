import { Exclude } from 'class-transformer';

export class BaseCreateDto {
  @Exclude()
  readonly enabled = true;
}
