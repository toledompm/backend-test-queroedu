import { EntityRepository, UpdateResult } from 'typeorm';
import { University } from './university.entity';
import { UniversityCreateDto } from './interface/university-create.dto';
import { BaseRepository } from '../common/base.repository';

@EntityRepository(University)
export class UniversityRepository extends BaseRepository<University> {
  getByName(universityName: string): Promise<University> {
    return this.findOne({ name: universityName, enabled: true });
  }

  softDeleteUniversity(university: University): Promise<UpdateResult> {
    return this.update(university, { enabled: false, deleted_at: `now()` });
  }
}
