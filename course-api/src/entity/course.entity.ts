import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Campus } from './campus.entity';
import { Offer } from './offer.entity';

@Entity()
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
  campus: Campus;

  @OneToMany(() => Offer, (offer) => offer.course)
  offers: Offer[];
}
