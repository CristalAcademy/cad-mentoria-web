import { TestBed } from '@angular/core/testing';

import { CadastroComplementoService } from './cadastro-complemento.service';

describe('CadastroComplementoService', () => {
  let service: CadastroComplementoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroComplementoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
