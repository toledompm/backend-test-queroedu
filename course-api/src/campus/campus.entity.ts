import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { University } from '../university/university.entity';
import { Course } from '../course/course.entity';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'campuses' })
export class Campus extends BaseEntity {
  @Column()
  city: string;

  @Column()
  name: string;

  @ManyToOne(() => University, (university) => university.campuses, {
    eager: true,
  })
  @JoinColumn({ name: 'university_id' })
  university: University;

  @OneToMany(() => Course, (course) => course.campus)
  courses: Course[];
}
