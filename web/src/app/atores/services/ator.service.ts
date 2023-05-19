import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AtorOutput} from "./models/ator-output";
import {API_CONST} from "../../../environments/app-const";

@Injectable({
  providedIn: 'root',
})
export class AtorService {
  private basePath = API_CONST.concat('/atores');

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<AtorOutput[]> {
    return this.httpClient.get<AtorOutput[]>(this.basePath);
  }

  getById(id: string): Observable<AtorOutput> {
    return this.httpClient.get<AtorOutput>(`${this.basePath}/${id}`);
  }

  post(createAtorInput: AtorOutput) {
    return this.httpClient.post(this.basePath, createAtorInput);
  }

  put(updateAtorInput: AtorOutput) {
    return this.httpClient.put(this.basePath, updateAtorInput);
  }

  delete(idAtor: string) {
    return this.httpClient.delete(`${this.basePath}/${idAtor}`);
  }
}
