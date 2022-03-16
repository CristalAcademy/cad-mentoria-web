import { TestBed } from '@angular/core/testing';

import { CadastroInicialService } from './cadastro-inicial.service';

describe('CadastroInicialService', () => {
  let service: CadastroInicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroInicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
