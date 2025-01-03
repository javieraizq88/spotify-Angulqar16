import { Component, OnInit } from '@angular/core';
import * as data1 from "../.././../data/canciones.json"
import { TrackModel } from '@core/modules/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks: TrackModel[] = []


  constructor() {}
  ngOnInit(): void {
    const { data }: any = (data1 as any).default
    this.tracks = data;
  }
}
