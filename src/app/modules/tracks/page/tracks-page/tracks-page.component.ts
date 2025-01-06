import { Component, OnDestroy, OnInit } from '@angular/core';
import * as data1 from "../../../../data/canciones.json"
import { TrackModel } from '@core/modules/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  // mockTrackList: Array<TrackModel> = []
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    // const { data }: any = (data1 as any).default
    // this.mockTrackList = data;
    const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response
      this.tracksRandom = response
      console.log("canciones treding", response)
    })
    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(response => {
      this.tracksRandom.push()
      console.log("canciones random", response)
    })

    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe() )  
  }
  
}
