import { CLASSE } from "./Enums/ClasseEnum";
import { PERFIL } from "./Enums/PerfilEnum";
import { STATUS } from "./Enums/StatusEnum";

export interface ResponseCadastroIncial
{
     classe :  CLASSE ,
     disponibilidade :  string ,
     dtNasc :  string ,
     email :  string ,
     entrevista :  string ,
     estuda : true,
     hrsDisponiveis : 0,
     id : 0,
     motivacao :  string ,
     nomeCompleto :  string ,
     perfil :  PERFIL ,
     programou : true,
     status :  STATUS ,
     trabalha : true
  }