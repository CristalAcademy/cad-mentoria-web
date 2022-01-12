import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { CadastroCandidatoService } from 'src/app/services/cadastro-candidato.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit  {
  constructor(private formBd: FormBuilder) {}

  form!: FormGroup;

  public hide : boolean = true;

  ngOnInit() {
    this.form = this.formBd.group({
      nome : this.formBd.control('', [Validators.required]),
      email : this.formBd.control('', [Validators.required, Validators.email]),
      password: this.formBd.control('', [Validators.required]),
      passwordC : this.formBd.control('', [Validators.required])
    })

    this.form.valueChanges.subscribe(change => {
      console.log(change)
    })

  }

  onSubmit(form: NgForm) {

    let candidato = new CadastroCandidatoService(form.value.nome,form.value.email,form.value.senha,form.value.confirmarSenha);

    console.log(candidato);
  }

}
