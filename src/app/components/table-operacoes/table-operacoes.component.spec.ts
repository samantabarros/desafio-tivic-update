import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOperacoesComponent } from './table-operacoes.component';

describe('TableOperacoesComponent', () => {
  let component: TableOperacoesComponent;
  let fixture: ComponentFixture<TableOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOperacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
