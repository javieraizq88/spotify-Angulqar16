import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/modules/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.trackService.getAllTracks$()
      .subscribe((response: TrackModel[]) => { // TODO  trae { data{} }
        console.log("desde la API", response)
        this.tracksTrending = response
      })

    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => { 
        console.log("desde la API invertidas", response)
        this.tracksRandom = response
      })
  }

  ngOnDestroy(): void {

  }
  
}
