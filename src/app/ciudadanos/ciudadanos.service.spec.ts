/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CiudadanosService } from './ciudadanos.service';

describe('Service: Ciudadanos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CiudadanosService]
    });
  });

  it('should ...', inject([CiudadanosService], (service: CiudadanosService) => {
    expect(service).toBeTruthy();
  }));
});