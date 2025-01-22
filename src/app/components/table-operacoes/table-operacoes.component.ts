import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface DadosOperacao {
  operacao: string
  nomeResponsavel: string,
  data: string,
  local: string,
  veiculos: string[],
  status: string
}

const ELEMENT_DATA: DadosOperacao[] = [
  {operacao: '001', nomeResponsavel: 'Priscila Farias Souza', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro A','Carro B', 'Carro C'], status: 'Finalizada'},
  {operacao: '002', nomeResponsavel: 'Marcos Paiva Santos', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro A'], status: 'Em andamento'},
  {operacao: '003', nomeResponsavel: 'Caio Costa Pinheiro', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro C'], status: 'Finalizada'},
  {operacao: '004', nomeResponsavel: 'Pedro Lima Barreto', data: '22/01/2024', local: 'Vitória da Conquista', veiculos: ['Carro D'], status: 'Finalizada'},
]

@Component({
  selector: 'app-table-operacoes',
  imports: [MatTableModule],
  templateUrl: './table-operacoes.component.html',
  styleUrl: './table-operacoes.component.scss'
})
export class TableOperacoesComponent {
  columnsToDisplay: string[] = ['operacao', 'nomeResponsavel', 'data', 'local', 'veiculos', 'status']
  dadosOperacao = ELEMENT_DATA;
}
