import { EntityRepository } from 'typeorm';
import { University } from './university.entity';
import { BaseRepository } from '../common/base.repository';

@EntityRepository(University)
export class UniversityRepository extends BaseRepository<University> {
  getByName(universityName: string): Promise<University> {
    return this.findOne({ name: universityName, enabled: true });
  }
}
