import { Test, TestingModule } from '@nestjs/testing';
import { UniversityMocks } from '../__mocks__/university';
import { UniversityService } from './university.service';
import { University } from './university.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UniversityCreateDto } from './interface/university-create.dto';
import { UniversityRepository } from './university.repository';
import { UpdateResult } from 'typeorm';

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
    jest.spyOn(universityRepositoryMock, 'save').mockImplementation(
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

  it('should throw "Update Failed" when soft delete fails', async () => {
    const existingId = 1;

    jest.spyOn(universityRepositoryMock, 'getById').mockImplementation(
      (_id: number): Promise<University> => {
        return Promise.resolve(validUniversity);
      },
    );

    jest
      .spyOn(universityRepositoryMock, 'softDeleteUniversity')
      .mockImplementation(
        (_university: University): Promise<UpdateResult> => {
          return Promise.resolve({ affected: 0 } as UpdateResult);
        },
      );

    await expect(universityService.deleteById(existingId)).rejects.toThrow(
      'Update Failed',
    );
  });

  it('should call repository functions and pass when softDelete passes', async () => {
    const existingId = 1;

    jest.spyOn(universityRepositoryMock, 'getById').mockImplementation(
      (_id: number): Promise<University> => {
        return Promise.resolve(validUniversity);
      },
    );

    jest
      .spyOn(universityRepositoryMock, 'softDeleteUniversity')
      .mockImplementation(
        (_university: University): Promise<UpdateResult> => {
          return Promise.resolve({ affected: 1 } as UpdateResult);
        },
      );

    await universityService.deleteById(existingId);

    expect(universityRepositoryMock.getById).toHaveBeenCalled();
    expect(universityRepositoryMock.softDeleteUniversity).toHaveBeenCalled();
  });

  it('should throw "not_found" when updating non-existing university', async () => {
    const universityName = 'valid university name';

    jest.spyOn(universityRepositoryMock, 'getByName').mockImplementation(
      (_name: string): Promise<University> => {
        return Promise.resolve(undefined);
      },
    );

    await expect(
      universityService.updateUniversity(universityName, validUniversityDto),
    ).rejects.toThrow('Not Found');
  });

  it('should throw "Update Failed" when repository updateUniversity fails', async () => {
    const universityName = 'valid university name';

    jest.spyOn(universityRepositoryMock, 'getByName').mockImplementation(
      (_name: string): Promise<University> => {
        return Promise.resolve(validUniversity);
      },
    );

    jest.spyOn(universityRepositoryMock, 'update').mockImplementation(
      (
        _university: University,
        _universityCreateDto: UniversityCreateDto,
      ): Promise<UpdateResult> => {
        return Promise.resolve({ affected: 0 } as UpdateResult);
      },
    );

    await expect(
      universityService.updateUniversity(universityName, validUniversityDto),
    ).rejects.toThrow('Update Failed');
  });

  it('should call repository methods and pass when updating university', async () => {
    const universityName = 'valid university name';

    jest.spyOn(universityRepositoryMock, 'getByName').mockImplementation(
      (_name: string): Promise<University> => {
        return Promise.resolve(validUniversity);
      },
    );

    jest.spyOn(universityRepositoryMock, 'update').mockImplementation(
      (
        _university: University,
        _universityCreateDto: UniversityCreateDto,
      ): Promise<UpdateResult> => {
        return Promise.resolve({ affected: 1 } as UpdateResult);
      },
    );

    await universityService.updateUniversity(
      universityName,
      validUniversityDto,
    );

    expect(universityRepositoryMock.getByName).toHaveBeenCalled();
    expect(universityRepositoryMock.update).toHaveBeenCalled();
  });
});
