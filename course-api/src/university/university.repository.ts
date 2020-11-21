import { EntityRepository, Repository, UpdateResult } from 'typeorm';
import { University } from './university.entity';
import { UniversityCreateDto } from './interface/university-create.dto';

@EntityRepository(University)
export class UniversityRepository extends Repository<University> {
  createUniversity(
    universityCreateDto: UniversityCreateDto,
  ): Promise<University> {
    return this.save(universityCreateDto);
  }

  getByName(universityName: string): Promise<University> {
    return this.findOne({ name: universityName, enabled: true });
  }

  getById(id: number): Promise<University> {
    return this.findOne({ id: id, enabled: true });
  }

  deleteUniversity(university: University): Promise<UpdateResult> {
    return this.update(university, { enabled: false });
  }

  updateUniversity(
    university: University,
    universityCreateDto: UniversityCreateDto,
  ): Promise<UpdateResult> {
    return this.update(university, universityCreateDto);
  }
}
