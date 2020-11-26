import { EntityRepository } from 'typeorm';
import { Campus } from './campus.entity';
import { BaseRepository } from '../common/base.repository';

@EntityRepository()
export class CampusRepository extends BaseRepository<Campus> {}
