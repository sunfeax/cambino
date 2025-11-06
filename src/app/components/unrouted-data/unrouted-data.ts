import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/userInterface';

@Component({
  selector: 'app-unrouted-data',
  imports: [],
  templateUrl: './unrouted-data.html',
  styleUrl: './unrouted-data.css',
  standalone: true
})
export class UnroutedData {
  data = inject(MAT_DIALOG_DATA);
  oUsuario: User = {} as User;

  ngOnInit() {
    this.oUsuario = this.data.usuario;
  }
}
