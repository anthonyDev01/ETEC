import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApagarViagemComponent } from './apagar-viagem.component';

describe('ApagarViagemComponent', () => {
  let component: ApagarViagemComponent;
  let fixture: ComponentFixture<ApagarViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApagarViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApagarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
