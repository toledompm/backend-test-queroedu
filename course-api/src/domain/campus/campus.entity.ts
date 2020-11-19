import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { University } from '../university/university.entity';
import { Course } from '../course/course.entity';

@Entity()
export class Campus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  name: string;

  @ManyToOne(() => University, (university) => university.campuses)
  university: University;

  @OneToMany(() => Course, (course) => course.campus)
  courses: Course[];
}
