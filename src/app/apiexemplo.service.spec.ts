import { TestBed, inject } from '@angular/core/testing';

import { ApiexemploService } from './apiexemplo.service';

describe('ApiexemploService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiexemploService]
    });
  });

  it('should be created', inject([ApiexemploService], (service: ApiexemploService) => {
    expect(service).toBeTruthy();
  }));
});
