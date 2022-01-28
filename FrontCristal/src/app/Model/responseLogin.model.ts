import { perfil } from './perfilEnum';
export interface ResponseLogin {
  token: string;
  perfil: perfil;
  email: string;
  permissoes: Array<Authority>;
}

interface Authority {
  autority: string;
}
