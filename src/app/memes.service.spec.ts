/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemesService } from './memes.service';

describe('MemesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemesService]
    });
  });

  it('should ...', inject([MemesService], (service: MemesService) => {
    expect(service).toBeTruthy();
  }));
});
