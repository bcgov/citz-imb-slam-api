import { Test } from '@nestjs/testing';
import { SoftwareService } from './software.service';

describe('SoftwareService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SoftwareService],
    }).compile();

    service = module.get(SoftwareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
