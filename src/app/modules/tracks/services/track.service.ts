import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api; // TODO 'http://localhost:3000/api/1.0'

  constructor(private httpClient: HttpClient) {}

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`) // TODO: se indica de donde se sacan las canciones
  }

}
