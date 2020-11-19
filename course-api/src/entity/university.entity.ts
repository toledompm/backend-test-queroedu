import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Campus } from './campus.entity';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @OneToMany(() => Campus, (campus) => campus.university)
  campuses: Campus[];
}
