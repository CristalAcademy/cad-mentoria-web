import { CadastroComplementoService } from './../../../services/cadastro-complemento.service';
import { RequestCadastroComplemento } from './../../../Model/ResquestCadastroComplemento';
import { Router } from '@angular/router';
import { CadastroCandidatoSocialComponent } from './../cadastro-candidato-social/cadastro-candidato-social.component';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.scss'],
})
export class CadastroCandidatoComponent implements OnInit {
  f = FormControl;
  minDate!: Date;
  maxDate!: Date;
  constructor(
    private formBd: FormBuilder,
    private router: Router,
    private CadastroComplementoService: CadastroComplementoService
  ) {
    const hoje = new Date();
    const maiorDeDezoito = new Date().setDate(hoje.getDate() - 6575);
    const menorDeNoventa = new Date().setDate(hoje.getDate() - 33000);
    this.minDate = new Date(menorDeNoventa);
    this.maxDate = new Date(maiorDeDezoito);
  }

  form!: FormGroup;

  public hide: boolean = true;

  ngOnInit() {
    this.form = this.formBd.group({
      data: this.formBd.control('', [Validators.required]),
      estuda: this.formBd.control(false, [Validators.required]),
      trabalha: this.formBd.control(false, [Validators.required]),
      conhece: this.formBd.control(false, [Validators.required]),
      periodo: this.formBd.control('', [Validators.required]),
      tempoTreino: this.formBd.control(0, [Validators.required]),
    });
  }
  getErrorMessage(prop: string) {
    if (this.element(prop)!.hasError('required')) {
      return 'Campo não pode ser vazio';
    } else if (this.element(prop)!.hasError('email')) {
      return 'Email não está válido';
    }
    return 'Senha deve ter ao menos de 8 caracteres';
  }
  onSubmit() {
   if (!this.form.invalid) {
      let request = new RequestCadastroComplemento(
        this.form.value.periodo,
        this.form.value.data,
        this.form.value.estuda,
        this.form.value.tempoTreino,
        this.form.value.conhece,
        this.form.value.trabalha
      );
      console.log(request);
      this.CadastroComplementoService.cadastroComplemento(request).subscribe(
        (response) => {
          this.router.navigateByUrl('/social'); 
        }
      );
    }
    this.router.navigateByUrl('/social'); 
  }
  element(key: string) {
    return this.form.get(key);
  }
}
