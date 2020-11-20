import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Campus } from '../campus/campus.entity';
import { Offer } from '../offer/offer.entity';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: string;

  @Column()
  shift: string;

  @Column()
  kind: string;

  @ManyToOne(() => Campus, (campus) => campus.courses)
  @JoinColumn({ name: 'campus_id' })
  campus: Campus;

  @OneToMany(() => Offer, (offer) => offer.course)
  offers: Offer[];
}
