import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDadosService } from '../../services/get-dados.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ToastrService } from 'ngx-toastr';
import { OperacaoService } from '../../services/operacao.service';

interface EditarOperacaoForm {
  operacao: FormControl
  responsavel: FormControl,
  data: FormControl,
  local: FormControl,
  veiculos: FormControl,
  status: FormControl,
  observacao: FormControl
}
@Component({
  selector: 'app-editar-operacao',
  imports: [MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, CommonModule],
  templateUrl: './editar-operacao.component.html',
  styleUrl: './editar-operacao.component.scss'
})
export class EditarOperacaoComponent {
  operacaoForm!: FormGroup<EditarOperacaoForm>;
  veiculos = ['Viatura A'];
  statusOpcoes = ['Em andamento', 'Finalizada'];
  id: string = '';
  dadosDaOperacao = {};

  constructor(private router: Router, private fb: FormBuilder, private dadosOperacao: GetDadosService, private route: ActivatedRoute, private toastService: ToastrService, private operacaoService: OperacaoService) { 
    this.operacaoForm = this.fb.group({
      operacao: [ '', Validators.required],
      responsavel: ['', Validators.required],
      data: ['', Validators.required],
      local: ['', Validators.required],
      veiculos: ['', Validators.required],
      status: ['', Validators.required],
      observacao: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      console.log('Teste id', this.id)
    })
    this.dadosOperacao.getDadosOperacaoId(this.id)
      .subscribe(
        dados => {
          this.dadosOperacao = dados;
          this.operacaoForm.patchValue(dados);
          console.log(this.operacaoForm.value.operacao)
    });
  }


  navigate(): void {
    this.router.navigate(["operacoes"])
  }
  submit() {
    console.log('Operação editada!')
    if (this.operacaoForm.valid) {
      if(this.operacaoForm.value.status === 'Em andamento'){
        this.operacaoForm.value.status ='em_andamento'
      }else if(this.operacaoForm.value.status === 'Finalizada'){
         this.operacaoForm.value.status = 'finalizada'
      }
      this.operacaoService.editarOperacao(this.id, this.operacaoForm.value.operacao, this.operacaoForm.value.responsavel, this.operacaoForm.value.data, this.operacaoForm.value.local, this.operacaoForm.value.veiculos, this.operacaoForm.value.status, this.operacaoForm.value.observacao).subscribe({
        next: () => this.toastService.success("Operação editada com sucesso!"),
        error: () => this.toastService.error("Erro ao editar operação! Tente novamente.")
      });
    }
  }
  onCancelar() {
    this.router.navigate(["operacoes"])
  }

}
