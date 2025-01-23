import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDadosService{
  apiUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getDadosOperacoes(): Observable<any> {
    return this.httpClient.get<any[]>(this.apiUrl + '/operacoes');
  }

  getTotalOperacoes(): Observable<number> {
    return this.httpClient.get<any[]>(this.apiUrl + '/operacoes').pipe(
      map((operacoes) => operacoes.length)
    );
  }

  getOperacoesEmAndamento(): Observable<number> {
    return this.httpClient.get<any[]>(this.apiUrl + '/operacoes').pipe(
      map((operacoes) =>
        operacoes.filter((operacao) => operacao.status === 'em_andamento').length
      )
    );
  }


  getOperacoesFinalizadas(): Observable<number> {
    return this.httpClient.get<any[]>(this.apiUrl + '/operacoes').pipe(
      map((operacoes) =>
        operacoes.filter((operacao) => operacao.status === 'finalizada').length
      )
    );
  }
}
