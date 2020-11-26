import { Repository } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  getById(id: number): Promise<T> {
    return this.findOne({ id: id, enabled: true } as any);
  }
}
