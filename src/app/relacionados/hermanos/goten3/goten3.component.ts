import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goten3',
  templateUrl: './goten3.component.html',
  styleUrls: ['./goten3.component.css']
})
export class Goten3Component implements OnInit {
  @Input() mensajeGoten: string;
  constructor() {}

  ngOnInit() {}
}
