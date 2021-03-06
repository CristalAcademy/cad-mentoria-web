import { PasswordService } from './../../services/password.service';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.component.html',
  styleUrls: ['./esqueci-minha-senha.component.scss'],
})
export class EsqueciMinhaSenhaComponent implements OnInit {
  f = FormControl;
  constructor(private formBd: FormBuilder, private passwordService : PasswordService) {}

  form!: FormGroup;

  ngOnInit() {
    this.form = this.formBd.group({
      email: this.formBd.control('', [Validators.required, Validators.email]),
      emailC: this.formBd.control('', [Validators.required, Validators.email]),
    });
  }

  getErrorMessage(prop: string) {
    if (this.element(prop)!.hasError('email')) {
      return 'Email não está válido';
    } else if (this.element(prop)!.hasError('required')) {
      return 'Campo não pode ser vazio';
    }
    return '';
  }

  element(key: string) {
    return this.form.get(key);
  }

  onSubmit() {
    if (this.form.value.email == this.form.value.emailC) {
      this.passwordService.forgotPass(this.form.value.email);
    }else {
      console.log("deu ruim:"+(this.form.value.email == this.form.value.emailC))
    }
  }
}
