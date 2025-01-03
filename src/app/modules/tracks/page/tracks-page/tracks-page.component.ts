import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTrackList = [
    {
      name: "nombre track"
    },
    {
      name: "nombre track"
    },
    {
      name: "nombre track"
    },
  ]
  constructor() {}
  ngOnInit(): void {
    
  }
}
