import { Component, OnInit } from '@angular/core';
import { CasaBulmaService } from 'src/app/services/casa-bulma.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-vegeta',
  templateUrl: './vegeta.component.html',
  styleUrls: ['./vegeta.component.css']
})
export class VegetaComponent implements OnInit {
  mensajeGoku: string;

  constructor(private casaBulmaService: CasaBulmaService) {}

  ngOnInit() {}

  enviarMensaje(mensajeVegeta) {
    this.casaBulmaService.enviar(mensajeVegeta);
  }

  verMensaje() {
    // take es un operador que hará que solo obtengamos el último valor
    // que tiene bulma$ almacenado. Si no lo usamos, cuando enviemos un mensaje
    // de cualquiera de los dos componentes, se mostrará automaticamente
    // en el que ya haya visto un mensaje anteriormente.
    this.casaBulmaService.bulma$.pipe(take(1)).subscribe(mensaje => (this.mensajeGoku = mensaje));
  }
}
