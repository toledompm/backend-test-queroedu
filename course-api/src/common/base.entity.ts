import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enabled: boolean;

  @Column({ nullable: true, type: 'timestamptz' })
  deleted_at: Date;
}
