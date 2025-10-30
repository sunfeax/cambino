import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RandomService } from '../../services/random';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})

export class Home {
  
  constructor(public router: Router, public randomService: RandomService) {
  
  }

  // ngOnInit() {
  
  // }

  nombreUsuario: string = '';
  randomNum: number = 0;

  cambiarNombreInput(event: any) {
    this.nombreUsuario = event.target?.value || '';
  }

  irAlSaludoEnrutado1() {
    window.location.href = '/saludo_enrutado/' + this.nombreUsuario;
  }

  irAlSaludoEnrutado2() {
    this.router.navigate(['saludo_enrutado', this.nombreUsuario]);
  }

  getRandomNum() {
    this.randomNum = this.randomService.getRandomInt(1, 100);
  }

}
