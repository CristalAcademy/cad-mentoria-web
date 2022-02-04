import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoClosedComponent } from './botao-closed.component';

describe('BotaoClosedComponent', () => {
  let component: BotaoClosedComponent;
  let fixture: ComponentFixture<BotaoClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
