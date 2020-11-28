import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campus } from './campus.entity';
import { CampusRepository } from './campus.repository';
import { CampusService } from './campus.service';
import { CampusController } from './campus.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Campus, CampusRepository])],
  controllers: [CampusController],
  providers: [CampusService],
})
export class CampusModule {}
