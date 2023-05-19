import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {CinemaOutput} from "./models/cinema-output";
import {API_CONST} from "../../../environments/app-const";

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private basePath = API_CONST.concat('/cinemas');

  constructor(public httpClient: HttpClient) {
  }

  getAll(): Observable<CinemaOutput[]> {
    return this.httpClient.get<CinemaOutput[]>(this.basePath);
  }

  getById(idCinema: string): Observable<CinemaOutput> {
    return this.httpClient.get<CinemaOutput>(`${this.basePath}/${idCinema}`);
  }

  post(createCinemaInput: CinemaOutput) {
    return this.httpClient.post(this.basePath, createCinemaInput);
  }

  put(updateCinemaInput: CinemaOutput) {
    return this.httpClient.put(this.basePath, updateCinemaInput);
  }

  delete(idCinema: string) {
    return this.httpClient.delete(`${this.basePath}/${idCinema}`);
  }
}
