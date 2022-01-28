import { Perfil } from './perfilEnum';

export interface ResponseLogin {
  token: string;
  perfil: Perfil;
  email: string;
  permissoes: Array<Authority>;
}

interface Authority {
  autority: string;
}
