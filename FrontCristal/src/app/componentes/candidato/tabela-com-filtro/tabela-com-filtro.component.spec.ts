import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComFiltroComponent } from './tabela-com-filtro.component';

describe('TabelaComFiltroComponent', () => {
  let component: TabelaComFiltroComponent;
  let fixture: ComponentFixture<TabelaComFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaComFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaComFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
