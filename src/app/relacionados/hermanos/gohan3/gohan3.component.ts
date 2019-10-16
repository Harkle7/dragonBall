import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gohan3',
  templateUrl: './gohan3.component.html',
  styleUrls: ['./gohan3.component.css']
})
export class Gohan3Component implements OnInit {
  @Output() mensajeDesdeGohan = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  enviarMensaje(mensaje: string) {
    this.mensajeDesdeGohan.emit(mensaje);
  }
}
