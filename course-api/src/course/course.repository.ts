import { EntityRepository } from 'typeorm';
import { Course } from './course.entity';
import { BaseRepository } from '../common/base.repository';

@EntityRepository(Course)
export class CourseRepository extends BaseRepository<Course> {}
