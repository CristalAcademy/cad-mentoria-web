import { Perfil } from "./PerfilEnum"

export interface ResponseCandidato {
  id: number;
  nomeCompleto: string;
  email:string;
  perfil: Perfil;
  dtNasc: Date;
  trabalha: boolean;
  estuda: boolean;
  hrsDisponiveis: number;
  programou: boolean;
  classe: string;
  motivacao: string;
  status: STATUS;
  entrevista: Date;
  disponibilidade: Date;
}

export enum STATUS {
  INICIAL,
  CADASTRO_COMPLEMENTAR,
  CADASTRO_SOCIAL,
  PROVA_LOGICA,
  ENTREVISTA,
  AGUARDANDO,
  APROVADO,
  REPROVADO,
}
