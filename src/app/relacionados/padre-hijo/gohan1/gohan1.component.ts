import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gohan1',
  templateUrl: './gohan1.component.html',
  styleUrls: ['./gohan1.component.css']
})
export class Gohan1Component implements OnInit {
  // Se recibe desde el padre. Ahora se puede utilizar en este componente
  // Cualquier cambio en esta variable en 'app-goku', se reflejará acá
  @Input() kamehamehaGohan: string;
  constructor() {}

  ngOnInit() {}
}
