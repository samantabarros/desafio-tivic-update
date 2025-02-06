import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OperacaoService } from '../../services/operacao.service';
import { ToastrService } from 'ngx-toastr';
import { GetDadosService } from '../../services/get-dados.service';

interface AdicionarOperacaoForm {
  operacao: FormControl
  responsavel: FormControl,
  data: FormControl,
  local: FormControl,
  veiculos: FormControl,
  status: FormControl,
  observacao: FormControl,
}
@Component({
  selector: 'app-adicionar-operacao',
  imports: [
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './adicionar-operacao.component.html',
  styleUrl: './adicionar-operacao.component.scss'
})
export class AdicionarOperacaoComponent {

  operacaoForm!: FormGroup<AdicionarOperacaoForm>;
  veiculos = ['Viatura A', 'Viatura B', 'Viatura C'];
  statusOpcoes = ['Em andamento', 'Finalizada'];
  //dadosOperacao = []

  constructor(private router: Router, private fb: FormBuilder, private dadosService: GetDadosService, private toastService: ToastrService, private operacaoService: OperacaoService) {
    this.operacaoForm = this.fb.group({
      operacao: ['', Validators.required],
      responsavel: ['', Validators.required],
      data: ['', Validators.required],
      local: ['', Validators.required],
      veiculos: ['', Validators.required],
      status: ['', Validators.required],
      observacao: ['', Validators.required],

    });
  }

  /*ngOnInit(): void {
    this.dadosService.getDadosOperacoes().subscribe((data) => {
      this.dadosOperacao = data;
      console.log(this.dadosOperacao);


      this.veiculos = this.dadosOperacao.map((operacao: any) => operacao.veiculosUtilizados);
      console.log(this.veiculos);
    });
  }*/

  submit() {
    if (this.operacaoForm.valid) {
      if (this.operacaoForm.value.status === 'Em andamento') {
        this.operacaoForm.value.status = 'em_andamento'
      } else if (this.operacaoForm.value.status === 'Finalizada') {
        this.operacaoForm.value.status = 'finalizada'
      }
      this.operacaoService.addOperacao(
        this.operacaoForm.value.operacao, 
        this.operacaoForm.value.responsavel, 
        this.operacaoForm.value.data, 
        this.operacaoForm.value.local, 
        this.operacaoForm.value.veiculos, 
        this.operacaoForm.value.status,
        this.operacaoForm.value.observacao,
      ).subscribe({
        next: (dados) => {
          console.log('dados', dados);
          this.router.navigate(['/editar-operacao', dados.id]);
          this.toastService.success("Operação adicionada com sucesso!")
        },
        error: () => this.toastService.error("Erro ao cadastrar operação! Tente novamente.")
      });
    }
  }

  navigate(): void {
    this.router.navigate(["operacoes"])
  }

  onCancelar() {
    this.router.navigate(["operacoes"])
  }

}

