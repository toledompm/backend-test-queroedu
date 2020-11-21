import { Test, TestingModule } from '@nestjs/testing';
import { UniversityMocks } from '../__mocks__/university';
import { UniversityService } from './university.service';
import { University } from './university.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UniversityCreateDto } from './interface/university-create.dto';
import { UniversityRepository } from './university.repository';

const { validUniversity, validUniversityDto } = UniversityMocks;

describe('UniversityService', () => {
  let universityService: UniversityService;
  let universityRepositoryMock: UniversityRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UniversityService,
        {
          provide: getRepositoryToken(University),
          useClass: UniversityRepository,
        },
      ],
    }).compile();

    universityService = module.get<UniversityService>(UniversityService);
    universityRepositoryMock = module.get<UniversityRepository>(
      getRepositoryToken(University),
    );
  });

  it('should create a university', async () => {
    jest.spyOn(universityRepositoryMock, 'createUniversity').mockImplementation(
      (_universityDto: UniversityCreateDto): Promise<University> => {
        expect(_universityDto).toEqual(validUniversityDto);

        return Promise.resolve(validUniversity);
      },
    );

    await expect(
      universityService.createUniversity(validUniversityDto),
    ).resolves.toEqual(validUniversity);
  });

  it('should return an university when searching by name', async () => {
    const validUniversityName = 'Existing university';

    jest.spyOn(universityRepositoryMock, 'getByName').mockImplementation(
      (_universityName: string): Promise<University> => {
        expect(_universityName).toEqual(validUniversityName);

        return Promise.resolve(validUniversity);
      },
    );

    await expect(
      universityService.getByName(validUniversityName),
    ).resolves.toEqual(validUniversity);
  });

  it('should throw not_found exception when searching for non-existing university', async () => {
    const invalidUniversityName = 'Fake Name';

    jest.spyOn(universityRepositoryMock, 'getByName').mockImplementation(
      (_universityName: string): Promise<University> => {
        expect(_universityName).toEqual(invalidUniversityName);

        return Promise.resolve(undefined);
      },
    );

    await expect(
      universityService.getByName(invalidUniversityName),
    ).rejects.toThrow('Not Found');
  });

  it('should throw not_found when deleting non-existing university', async () => {
    const nonExistingId = -1;

    jest.spyOn(universityRepositoryMock, 'getById').mockImplementation(
      (_id: number): Promise<University> => {
        expect(_id).toEqual(nonExistingId);

        return Promise.resolve(undefined);
      },
    );

    await expect(universityService.deleteById(nonExistingId)).rejects.toThrow(
      'Not Found',
    );
  });
});
