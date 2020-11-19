import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_price: number;

  @Column()
  price_with_discount: number;

  @Column()
  discount_percentage: number;

  @Column()
  start_date: Date;

  @Column()
  enrollment_semester: string;

  @Column()
  enabled: boolean;

  @ManyToOne(() => Course, (course) => course.offers)
  course: Course;
}
