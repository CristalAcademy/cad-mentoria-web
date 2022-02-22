import { CadastroSocialService } from './../../../services/Cadastro-Social.service';

import { RequestCadastroSocial } from './../../../Model/RequestCadastroSocial';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro-candidato-social',
  templateUrl: './cadastro-candidato-social.component.html',
  styleUrls: ['./cadastro-candidato-social.component.scss'],
})
export class CadastroCandidatoSocialComponent implements OnInit {
  f = FormControl;
  minDate!: Date;
  maxDate!: Date;
  constructor(
    private formBd: FormBuilder,
     private router: Router,
     private CadastroSocialService: CadastroSocialService ) {
    const hoje = new Date();
    const quinzena = new Date().setDate(hoje.getDate() + 15);
    this.minDate = new Date(hoje);
    this.maxDate = new Date(quinzena);
  }

  form!: FormGroup;

  ngOnInit() {
    this.form = this.formBd.group({
      razao: this.formBd.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(150),
      ]),
       classe: this.formBd.control('', [Validators.required]),
      agendar: this.formBd.control('', [Validators.required]),
    });
  }

  onSubmit() {
    if(!this.form.invalid){
      let request = new RequestCadastroSocial(
        this.form.value.classe,
        this.form.value.razao,
        this.form.value.agendar
      );
      console.log(request);
      this.CadastroSocialService.cadastroSocial(request).subscribe(
        (response) => {
          this.router.navigateByUrl('/login')
        }
      )

    }
  }
  aoPular() {
    this.router.navigateByUrl('/status/1');
  }

  public visible = false;
  public mouse = { x: 0, y: 0 };

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y };
  }

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }

}
