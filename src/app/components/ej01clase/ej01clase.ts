import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // hay que añadir CommonModule para bucles, if-else

@Component({
  selector: 'app-ej01clase',
  imports: [CommonModule],
  templateUrl: './ej01clase.html',
  styleUrl: './ej01clase.css',
  standalone: true
})

export class Ej01clase {

  // atributos
  name = 'Vlad';
  title = 'Forest';
  ancho = 800;
  altura = 300;
  hasError = true;
  userRole = '';
  mostrar = false;
  items = ['apple', 'banana', 'pear', 'peach'];
  nombre = 'Rafa';
  today: Date = new Date;

  // Lifecycle Hook, the default place to write logic (API calls, data initialization)
  ngOnInit() {
    console.log("ngOnInit");
    this.name = 'Pepe'
  }

  // constructor starts first, Dependency Injection is happening here
  constructor() {
    console.log("constructor");
    this.name = 'Maria'
  }

  // functions
  suma(a: number, b: number): number {
    return a + b;
  }

  cambiarNombre() {
    this.name = 'Juan';
  }

  cambiarNombreInput(event: any) {
    this.name = event.target.value;
  }

  flipMostrar() {
    this.mostrar = !this.mostrar;
  }
}
