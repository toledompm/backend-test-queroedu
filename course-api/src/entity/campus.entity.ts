import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { University } from './university.entity';

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
}
