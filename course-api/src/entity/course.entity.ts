import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Campus } from './campus.entity';

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
}
