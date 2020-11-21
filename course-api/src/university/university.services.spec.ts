import { Test, TestingModule } from '@nestjs/testing';
import { UniversityMocks } from '../__mocks__/university';
import { UniversityService } from './university.service';
import { University } from './university.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UniversityCreateDto } from './interface/university-create.dto';
import { UniversityRepository } from './university.repository';

const {
  validUniversity,
  validUniversityDto,
  invalidUniversityDto,
} = UniversityMocks;

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

    return universityService
      .createUniversity(validUniversityDto)
      .then((data) => {
        expect(data).toEqual(validUniversity);
      });
  });
});
