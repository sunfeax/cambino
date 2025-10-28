import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-saludoEnrutado',
  imports: [RouterModule],
  templateUrl: './saludoEnrutado.html',
  styleUrl: './saludoEnrutado.css',
  standalone: true
})

export class SaludoEnrutado {
  
  nombre: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
  
  }

}
