import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {GeneroOutput} from "./models/genero-output";
import {API_CONST} from "../../../environments/app-const";

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  private basePath = API_CONST.concat('/generos');

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<GeneroOutput[]> {
    return this.httpClient.get<GeneroOutput[]>(this.basePath);
  }

  getById(generoId: string): Observable<GeneroOutput> {
    return this.httpClient.get<GeneroOutput>(`${this.basePath}/${generoId}`);
  }

  post(createGeneroInput: GeneroOutput) {
    return this.httpClient.post(this.basePath, createGeneroInput);
  }

  put(updateGeneroInput: GeneroOutput) {
    return this.httpClient.put(this.basePath, updateGeneroInput);
  }

  delete(generoId: string) {
    return this.httpClient.delete(`${this.basePath}/${generoId}`);
  }
}
