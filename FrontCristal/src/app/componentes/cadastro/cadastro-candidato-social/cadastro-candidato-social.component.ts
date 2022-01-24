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
  constructor(private formBd: FormBuilder, private router: Router) {
    const hoje = new Date();
    const quinzena = new Date().setDate(hoje.getDate() + 15);
    this.minDate = new Date(hoje);
    this.maxDate = new Date(quinzena);
  }

  form!: FormGroup;

  ngOnInit() {
    this.form = this.formBd.group({
      classe: this.formBd.control('', [Validators.required]),
      razao: this.formBd.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(150),
      ]),
      agendar: this.formBd.control('', [Validators.required]),
    });
  }

  onSubmit() {
    this.router.navigateByUrl('/status/2');
  }
  aoPular() {
    this.router.navigateByUrl('/status/1');
  }
}
