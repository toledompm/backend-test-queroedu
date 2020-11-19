import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Course } from '../course/course.entity';

@Entity()
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

  @ManyToOne(() => Course, (course) => course.offers)
  course: Course;
}
