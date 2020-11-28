import { Repository, UpdateResult } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseRepository<T extends BaseEntity> extends Repository<T> {
  getById(id: number): Promise<T> {
    return this.findOne({ id: id, enabled: true } as any);
  }

  softDeleteEntity(entity: T): Promise<UpdateResult> {
    return this.update(
      entity as any,
      { enabled: false, deleted_at: `now()` } as any,
    );
  }
}
