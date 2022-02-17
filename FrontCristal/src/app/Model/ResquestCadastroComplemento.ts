export class RequestCadastroComplemento {
  constructor(
    disponibilidade: string,
    dtNasc: string,
    estuda: boolean,
    hrsDisponiveis: number,
    programou: boolean,
    trabalha: boolean
  ) {
    this.disponibilidade = disponibilidade;
    this.dtNasc = dtNasc;
    this.estuda = Boolean(estuda);
    this.hrsDisponiveis = hrsDisponiveis;
    this.programou = Boolean(programou);
    this.trabalha = Boolean(trabalha);
  }
  disponibilidade!: string;
  dtNasc!: string;
  estuda!: boolean;
  hrsDisponiveis!: number;
  programou!: boolean;
  trabalha!: boolean;
}
