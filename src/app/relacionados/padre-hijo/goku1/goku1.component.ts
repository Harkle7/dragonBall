import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku1',
  templateUrl: './goku1.component.html',
  styleUrls: ['./goku1.component.css']
})
export class Goku1Component implements OnInit {
  // Se declara en el componente padre para luego comunicarlo al componente hijo
  kamehamehaGoku = '';

  constructor() {}

  ngOnInit() {}

  keyUp(mensaje: string) {
    this.kamehamehaGoku = mensaje;
  }
}
