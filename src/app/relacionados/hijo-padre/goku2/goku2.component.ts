import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku2',
  templateUrl: './goku2.component.html',
  styleUrls: ['./goku2.component.css']
})
export class Goku2Component implements OnInit {
  genkidama = false;
  genkidamaImg: string;

  constructor() {}

  ngOnInit() {}

  genkidamaLista(confirmation: boolean) {
    this.genkidama = confirmation;
    console.log(this.genkidama);

    // hacer genkidama si es true
    if (this.genkidama) {
      this.genkidamaImg =
        'https://vignette.wikia.nocookie.net/dragonball/images/6/6c/Goku_lanzando_la_Genkidama.png/revision/latest?cb=20130105194140&path-prefix=es';
    }
  }
}
