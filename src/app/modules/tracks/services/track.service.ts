import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment"
import { TracksModule } from '../tracks.module';
import { TrackModel } from '@core/modules/tracks.model';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api; // TODO 'http://localhost:3000/api/1.0'

  constructor(private httpClient: HttpClient) {}

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`) // TODO: se indica de donde se sacan las canciones
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`) // TODO: se indica de donde se sacan las canciones
    .pipe(
      mergeMap(({ data }: any) => this.skipById( data, 1 )), // TODO devuelve todas las canciones menos la del id 1
    )
  }

}
