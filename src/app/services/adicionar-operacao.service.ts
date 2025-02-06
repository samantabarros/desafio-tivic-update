import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AddOperacaoResponse } from '../types/add-operacao.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdicionarOperacaoService {
    apiUrl: string = "http://localhost:3000"

  constructor(private router: Router, private httpClient: HttpClient) { }
  addOperacao(operacao: string, responsavel: string, data: string, local: string, veiculos: [], status: string){
    return this.httpClient.post<AddOperacaoResponse>(this.apiUrl + "/operacoes", {operacao, responsavel, data, local, veiculos, status}).pipe()
  }

}
