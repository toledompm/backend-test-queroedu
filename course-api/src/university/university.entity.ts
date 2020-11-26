import { Entity, Column, OneToMany } from 'typeorm';
import { Campus } from '../campus/campus.entity';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'universities' })
export class University extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @OneToMany(() => Campus, (campus) => campus.university)
  campuses: Campus[];
}
