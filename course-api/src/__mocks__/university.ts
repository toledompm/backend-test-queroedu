import { University } from '../university/university.entity';
import { UniversityCreateDto } from '../university/interface/university-create.dto';

export const UniversityMocks = {
  validUniversity: {
    name: 'SomeValidName',
    logoUrl: 'validurl.com',
    enabled: true,
    id: 1,
  } as University,

  validUniversityDto: {
    name: 'SomeValidName',
    logoUrl: 'validurl.com',
  } as UniversityCreateDto,

  invalidUniversityDto: {
    name: 'invalid name with spaces',
    logoUrl: 'not an url',
  } as UniversityCreateDto,
};
