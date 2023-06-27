import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroViagensComponent } from './cadastro-viagens.component';

describe('CadastroViagensComponent', () => {
  let component: CadastroViagensComponent;
  let fixture: ComponentFixture<CadastroViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
