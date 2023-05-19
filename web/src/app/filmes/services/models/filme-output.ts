import {GeneroOutput} from "../../../generos/services/models/genero-output";
import {AtorOutput} from "../../../atores/services/models/ator-output";
import {CinemaOutput} from "../../../cinemas/services/models/cinema-output";

export interface FilmeOutput {
  id: string;
  nome: string;
  noCinema: boolean;
  dataDeLancamento: Date;
  foto: string | null;
  generos: GeneroOutput[];
  atores: AtorOutput[];
  cinemas: CinemaOutput[];
}
