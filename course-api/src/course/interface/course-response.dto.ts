import { CampusResponseDto } from '../campus/interface/campus-response.dto';

export class CourseResponseDto {
  readonly name: string;

  readonly level: string;

  readonly shift: string;

  readonly kind: string;

  readonly campus: CampusResponseDto;
}
