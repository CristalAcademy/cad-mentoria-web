import { Perfil } from './PerfilEnum';
export class RequestCadastroSocial {
    constructor(classe: Perfil,
         entrevista:string ,
          motivacao: string
          ){
        this.classe = classe;
        this.entrevista = entrevista;
        this.motivacao = motivacao;
    }
    classe!: Perfil;
    entrevista!:string;
    motivacao!: string;
}