import { Injectable } from '@angular/core';
import { TrackModel } from '@core/modules/tracks.model';
import { Observable, of } from 'rxjs';
import * as data1 from "../../../data/canciones.json"

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([])
  
  constructor() {
    const { data }: any = (data1 as any).default
    this.dataTracksTrending$ = of(data)
   }
}
