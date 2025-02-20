import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/modules/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover:"",
    album: "album",
    name: "name",
    url: "",
    _id: 1,
  }

  constructor() {}
  ngOnInit(): void {
    
  }

}
