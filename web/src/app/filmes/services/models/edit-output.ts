import {GeneroOutput} from "../../../generos/services/models/genero-output";
import {AtorOutput} from "../../../atores/services/models/ator-output";
import {CinemaOutput} from "../../../cinemas/services/models/cinema-output";

export interface EditOutput {
  generos: GeneroOutput[];
  atores: AtorOutput[];
  cinemas: CinemaOutput[];
}
