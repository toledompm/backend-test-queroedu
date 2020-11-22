import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Campus } from '../campus/campus.entity';

@Entity({ name: 'universities' })
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @Column()
  enabled: boolean;

  @Column({ nullable: true, type: 'timestamptz' })
  deleted_at: Date;

  @OneToMany(() => Campus, (campus) => campus.university)
  campuses: Campus[];
}
