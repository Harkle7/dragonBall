import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku3',
  templateUrl: './goku3.component.html',
  styleUrls: ['./goku3.component.css']
})
export class Goku3Component implements OnInit {
  enviarAGoten: string;

  mensajeParaGoten(mensaje: string) {
    this.enviarAGoten = mensaje;
  }
  constructor() {}

  ngOnInit() {}
}
