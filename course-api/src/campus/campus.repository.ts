import { EntityRepository, Repository } from 'typeorm';
import { CampusCreateDto } from './interface/campus-create.dto';
import { Campus } from './campus.entity';

@EntityRepository()
export class CampusRepository extends Repository<Campus> {
  createUniversity(campusCreateDto: CampusCreateDto) {
    return this.save(campusCreateDto);
  }
}
