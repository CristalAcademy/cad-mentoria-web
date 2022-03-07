import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteMenuComponent } from './teste-menu.component';

describe('TesteMenuComponent', () => {
  let component: TesteMenuComponent;
  let fixture: ComponentFixture<TesteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
