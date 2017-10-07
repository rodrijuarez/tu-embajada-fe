/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmbajadoresService } from './embajadores.service';

describe('Service: Embajadores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbajadoresService]
    });
  });

  it('should ...', inject([EmbajadoresService], (service: EmbajadoresService) => {
    expect(service).toBeTruthy();
  }));
});