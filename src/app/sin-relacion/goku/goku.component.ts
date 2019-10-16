import { Component, OnInit } from '@angular/core';
import { CasaBulmaService } from 'src/app/services/casa-bulma.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.css']
})
export class GokuComponent implements OnInit {
  mensajeVegeta: string;

  constructor(private casaBulmaService: CasaBulmaService) {}

  ngOnInit() {}

  enviarMensaje(mensajeGoku) {
    this.casaBulmaService.enviar(mensajeGoku);
  }

  verMensaje() {
    this.casaBulmaService.bulma$.pipe(take(1)).subscribe(mensaje => (this.mensajeVegeta = mensaje));
  }
}
