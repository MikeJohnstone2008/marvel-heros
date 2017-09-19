import { TestBed, inject } from '@angular/core/testing';

import { GetMarvelHerosService } from './get-marvel-heros.service';

describe('GetMarvelHerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMarvelHerosService]
    });
  });

  it('should be created', inject([GetMarvelHerosService], (service: GetMarvelHerosService) => {
    expect(service).toBeTruthy();
  }));
});
