import { UniversityResponseDto } from '../university/interface/university-response.dto';

export class CampusResponseDto {
  readonly name: string;

  readonly city: string;

  readonly university: UniversityResponseDto;
}
