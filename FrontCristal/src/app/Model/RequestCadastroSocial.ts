export class RequestCadastroSocial {
    constructor(classe: string, entrevista:string, motivacao: string){
        this.classe = classe;
        this.entrevista = entrevista;
        this.motivacao = motivacao;
    }
    classe!: string;
    entrevista!: string;
    motivacao!: string;
}