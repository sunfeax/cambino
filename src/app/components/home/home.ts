import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})

export class Home {

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
