import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Course } from '../course/course.entity';

@Entity({ name: 'offers' })
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_price' })
  fullPrice: number;

  @Column({ name: 'price_with_discount' })
  priceWithDiscount: number;

  @Column({ name: 'discount_percentage' })
  discountPercentage: number;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'enrollment_semester' })
  enrollmentSemester: string;

  @Column()
  enabled: boolean;

  @Column({ nullable: true })
  deleted_at: Date;

  @ManyToOne(() => Course, (course) => course.offers)
  @JoinColumn({ name: 'course_id' })
  course: Course;
}
