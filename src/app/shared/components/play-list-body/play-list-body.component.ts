import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/modules/tracks.model';
import * as data1 from "../../../data/canciones.json"

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks: TrackModel[] = []
  optionSort: { 
    property: string | null, 
    order: string 
  } = { 
      property: null, 
      order: 'asc' 
    }
  constructor() { }

  ngOnInit(): void {
    const { data }: any = (data1 as any).default
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }

}