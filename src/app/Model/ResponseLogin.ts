import { PERFIL } from './Enums/PerfilEnum';

export interface ResponseLogin {
  token: string;
  perfil: PERFIL;
  email: string;
  permissoes: Array<Authority>;
}

export interface Authority {
  autority: string;
}
