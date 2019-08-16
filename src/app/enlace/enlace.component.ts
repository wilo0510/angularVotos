import { Component, OnInit, Input } from '@angular/core';
import { Enlace } from './enlace.modelo';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {
@Input() enlace:Enlace;
  constructor() { }

  ngOnInit() {
  }

}
