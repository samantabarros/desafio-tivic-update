import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TableOperacoesComponent } from '../../components/table-operacoes/table-operacoes.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-operacoes',
  imports: [MatIconModule,  TableOperacoesComponent, MatCardModule, MatToolbarModule],
  templateUrl: './operacoes.component.html',
  styleUrl: './operacoes.component.scss'
})
export class OperacoesComponent {
  constructor(private router: Router){}
  navigate(): void{
    this.router.navigate(["adicionar-operacao"])
  }
}
