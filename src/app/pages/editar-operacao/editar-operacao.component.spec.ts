import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOperacaoComponent } from './editar-operacao.component';

describe('EditarOperacaoComponent', () => {
  let component: EditarOperacaoComponent;
  let fixture: ComponentFixture<EditarOperacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarOperacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
