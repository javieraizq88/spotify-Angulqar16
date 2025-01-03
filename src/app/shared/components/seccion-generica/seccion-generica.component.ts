import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-generica',
  templateUrl: './seccion-generica.component.html',
  styleUrls: ['./seccion-generica.component.css']
})
export class SeccionGenericaComponent implements OnInit {
  @Input() title: string = ""
  @Input() mode: "small" | "big" = "big"
  @Input() dataTracks: Array<any> = []

  constructor() {}
  ngOnInit(): void {
    
  }
}
