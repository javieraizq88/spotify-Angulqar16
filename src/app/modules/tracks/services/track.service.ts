import { Injectable } from '@angular/core';
import { TrackModel } from '@core/modules/tracks.model';
import { Observable, of } from 'rxjs';
import * as data1 from "../../../data/canciones.json"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments /environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api; // TODO 'http://localhost:3000/api/1.0'

  // TODO: usando data dummy
  // dataTracksTrending$: Observable<TrackModel[]> = of([])
  // dataTracksRandom$: Observable<TrackModel[]> = of([])

  constructor(private httpClient: HttpClient) {
    // TODO: usa data dummy
    // const { data }: any = (data1 as any).default
    // this.dataTracksTrending$ = of(data)
    // this.dataTracksRandom$ = new Observable((observer) => {
    //   const trackExample: TrackModel = {
    //     _id: 2,
    //     name: "ejemplo",
    //     album: "ejemplo album",
    //     url: "", 
    //     cover: ""
    //   }
    //     setTimeout(() =>{
    //       observer.next([trackExample])
    //     },2000 )
    // })
  }

  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`) // TODO: se indica de donde se sacan las canciones
  }

}
