import { Perfil } from './PerfilEnum';

export interface ResponseLogin {
  token: string;
  perfil: Perfil;
  email: string;
  permissoes: Array<Authority>;
}

export interface Authority {
  autority: string;
}
