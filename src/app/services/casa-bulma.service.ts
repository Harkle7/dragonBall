import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasaBulmaService {
  private bulma = new BehaviorSubject<string>('');

  // No se utiliza directamente el BehaviorSubject (buena practica)
  // Se canaliza su uso a través de un observable que será público.
  // Este observable llamará quién quiera ver el último mensaje que se dejó.
  bulma$ = this.bulma.asObservable();

  // Almacenar mensaje, listo para mostrarlo a quién lo pida.
  enviar(mensaje) {
    // function que llamará quien quiera transmitir un mensaje
    this.bulma.next(mensaje);
  }

  constructor() {}
}
