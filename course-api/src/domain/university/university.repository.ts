import { EntityRepository, Repository } from 'typeorm';
import { University } from './university.entity';
import { UniversityDto } from './interface/university.dto';

@EntityRepository(University)
export class UniversityRepository extends Repository<University> {
  async createUniversity(universityDto: UniversityDto) {
    return await this.save(universityDto);
  }
}
