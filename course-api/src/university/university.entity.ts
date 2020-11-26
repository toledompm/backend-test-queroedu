import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Campus } from '../campus/campus.entity';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'universities' })
export class University extends BaseEntity {
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
