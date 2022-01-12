import { Component, OnInit } from '@angular/core';
import { FormControl,  NgForm,  Validators } from '@angular/forms';
import { CadastroCandidatoService } from 'src/app/services/cadastro-candidato.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent  {

  nomeFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  passwordCFormControl = new FormControl('', [Validators.required]);

  public hide : boolean = true;

  onSubmit(form: NgForm) {

    let candidato = new CadastroCandidatoService(form.value.nome,form.value.email,form.value.senha,form.value.confirmarSenha);

    console.log(candidato);
  }

}
