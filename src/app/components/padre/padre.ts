import { Component } from '@angular/core';
import { Hijo } from "../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
  standalone: true
})

export class Padre {

  mensajeDelPadreComponent: string = "";

  enviar(mensaje: string) {
    this.mensajeDelPadreComponent = mensaje || '';
  }

  respuestaDelHijo: string = "";

}
