import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})

export class Home {
  
  constructor(public router: Router) {
  
  }

  // ngOnInit() {
  
  // }

  nombreUsuario: string = '';

  cambiarNombreInput(event: any) {
    this.nombreUsuario = event.target?.value || '';
  }

  irAlSaludoEnrutado1() {
    window.location.href = '/saludo_enrutado/' + this.nombreUsuario;
  }

  irAlSaludoEnrutado2() {
    this.router.navigate(['saludo_enrutado', this.nombreUsuario]);
  }

}
