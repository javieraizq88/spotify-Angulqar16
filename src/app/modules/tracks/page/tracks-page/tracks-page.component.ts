import { Component, OnInit } from '@angular/core';
import * as data1 from "../../../../data/canciones.json"
import { TrackModel } from '@core/modules/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTrackList: Array<TrackModel> = [

  ]
  constructor() {}
  ngOnInit(): void {
    const { data }: any = (data1 as any).default
    this.mockTrackList = data;
  }
}
