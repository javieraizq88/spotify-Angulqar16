import { Injectable } from '@angular/core';
import { TrackModel } from '@core/modules/tracks.model';
import { Observable, of } from 'rxjs';
import * as data1 from "../../../data/canciones.json"

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<any> = of([])

  constructor() {
    const { data }: any = (data1 as any).default
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 2,
        name: "ejemplo",
        album: "ejemplo album",
        url: "", 
        cover: ""
      }
        setTimeout(() =>{
          observer.next([trackExample])
        },2000 )
    })
  }
}
