import { EntityRepository, Repository } from 'typeorm';
import { University } from './university.entity';
import { UniversityDto } from './interface/university.dto';

@EntityRepository(University)
export class UniversityRepository extends Repository<University> {
  createUniversity(universityDto: UniversityDto): Promise<University> {
    return this.save(universityDto);
  }

  getUniversityByName(universityName: string): Promise<University> {
    return this.createQueryBuilder()
      .where('name = :name', { name: universityName })
      .getOne();
  }
}
