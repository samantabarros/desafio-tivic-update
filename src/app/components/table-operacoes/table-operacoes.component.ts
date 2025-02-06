import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { GetDadosService } from '../../services/get-dados.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

export interface DadosOperacao {
  operacao: string
  responsavel: string,
  data: string,
  local: string,
  veiculos: string[],
  status: string,
}

// const ELEMENT_DATA: DadosOperacao[] = [
//   {operacao: '001', responsavel: 'Priscila Farias Souza', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro A','Carro B', 'Carro C'], status: 'Finalizada'},
//   {operacao: '002', responsavel: 'Marcos Paiva Santos', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro A'], status: 'Em andamento'},
//   {operacao: '003', responsavel: 'Caio Costa Pinheiro', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro C'], status: 'Finalizada'},
//   {operacao: '004', responsavel: 'Pedro Lima Barreto', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro D'], status: 'Finalizada'},
// ]

@Component({
  selector: 'app-table-operacoes',
  imports: [MatTableModule, CommonModule, MatIconModule],
  templateUrl: './table-operacoes.component.html',
  styleUrl: './table-operacoes.component.scss'
})
export class TableOperacoesComponent {
  columnsToDisplay: string[] = ['operacao', 'responsavel', 'data', 'local', 'veiculos', 'status', 'acoes']
  dadosOperacao = [];

  constructor(private dadosService: GetDadosService, private toastService: ToastrService){}

  ngOnInit(): void {
    this.dadosService.getDadosOperacoes().subscribe((data) => {
      this.dadosOperacao = data;
    });
  }

  carregarOperacoes() {
    this.dadosService.getDadosOperacoes().subscribe((data) => {
      this.dadosOperacao = data;
    });
  }
  editarOperacao(operacao: any) {
    //this.router.navigate(['/editar-operacao', operacao.id]);
    confirm('Operação indisponível no momento!')
  }


  excluirOperacao(id: string) {
    if (confirm('Tem certeza que deseja excluir esta operação?')) {
      this.dadosService.excluirOperacao(id).subscribe({
        next: () => {
          this.toastService.success('Operação excluída com sucesso!');
          this.carregarOperacoes(); 
        },
        error: () => {
          this.toastService.error('Erro ao excluir a operação.');
        }
      });
    }
  }
}

