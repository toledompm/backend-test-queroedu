import { Campus } from '../campus/campus.entity';
import { CampusCreateDto } from '../campus/interface/campus-create.dto';
import { UniversityMocks } from './university';

export const CampusMocks = {
  validCampus: {
    name: 'SomeValidName',
    city: 'Not a Fake City ;)',
    university: UniversityMocks.validUniversity,
    enabled: true,
    id: 1,
  } as Campus,

  validCampusDto: {
    name: 'SomeValidName',
    city: 'Not a Fake City ;)',
    university_id: 1,
    enabled: true,
  } as CampusCreateDto,
};
