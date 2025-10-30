import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
  standalone: true
})

export class Hijo {
  @Input() mensajeDelHijoComponent: string = "";

  @Output() respuestaAlPadre = new EventEmitter<string>();

  respuestaAlPadreValue: string = "";

  enviarRespuesta(respuesta: string) {
    this.respuestaAlPadreValue = respuesta || '';
    this.respuestaAlPadre.emit(this.respuestaAlPadreValue);
  }
}
