import { Test, TestingModule } from '@nestjs/testing';
import { Campus } from './campus.entity';
import { CampusService } from './campus.service';
import { CampusRepository } from './campus.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CampusMocks } from '../__mocks__/campus';
import { UpdateResult } from 'typeorm';

const { validCampus, validCampusDto } = CampusMocks;

describe('CampusService', () => {
  let campusService: CampusService;
  let campusRepositoryMock: CampusRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CampusService,
        {
          provide: getRepositoryToken(Campus),
          useClass: CampusRepository,
        },
      ],
    }).compile();

    campusService = module.get<CampusService>(CampusService);
    campusRepositoryMock = module.get<CampusRepository>(
      getRepositoryToken(Campus),
    );
  });

  it('should resolve when deleting existing campus', async () => {
    const existingId = 1;

    jest.spyOn(campusRepositoryMock, 'getById').mockImplementation(
      (_id: number): Promise<Campus> => {
        return Promise.resolve(validCampus);
      },
    );

    jest.spyOn(campusRepositoryMock, 'softDeleteEntity').mockImplementation(
      (_campus: Campus): Promise<UpdateResult> => {
        return Promise.resolve({ affected: 1 } as UpdateResult);
      },
    );

    await expect(campusService.deleteById(existingId)).resolves.toBe(undefined);
  });
});
