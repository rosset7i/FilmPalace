import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {FilmeOutput} from "./models/filme-output";
import {API_CONST} from "../../../environments/app-const";
import {EditOutput} from "./models/edit-output";

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private basePath = API_CONST.concat('/filmes');

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<FilmeOutput[]> {
    return this.httpClient.get<FilmeOutput[]>(this.basePath);
  }

  getById(filmeId: string): Observable<FilmeOutput> {
    return this.httpClient.get<FilmeOutput>(`${this.basePath}/${filmeId}`);
  }

  getEditForm(): Observable<EditOutput> {
    return this.httpClient.get<EditOutput>(`${this.basePath}/edit`);
  }

  post(createFilmeInput: FilmeOutput) {
    return this.httpClient.post(this.basePath, createFilmeInput);
  }

  put(updateFilmeInput: FilmeOutput) {
    return this.httpClient.put(this.basePath, updateFilmeInput);
  }

  delete(filmeId: string) {
    return this.httpClient.delete(`${this.basePath}/${filmeId}`);
  }
}
