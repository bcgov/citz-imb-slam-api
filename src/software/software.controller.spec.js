import { Test } from '@nestjs/testing';
import { SoftwareController } from './software.controller';

describe('Software Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [SoftwareController],
    }).compile();

    controller = module.get(SoftwareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
