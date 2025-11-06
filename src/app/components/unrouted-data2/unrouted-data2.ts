import { JSONPlaceHolderService } from '../../services/jsonplaceholder';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/userInterface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-unrouted_data2',
  imports: [AsyncPipe],
  templateUrl: './unrouted-data2.html',
  styleUrl: './unrouted-data2.css',
  standalone: true
})

export class UnroutedData2 {
  data = inject(MAT_DIALOG_DATA);
  nUsuario: number = 0;
  oUsuario$: Observable<User>;

  constructor(private oJSONPlaceHolderService: JSONPlaceHolderService) {
    this.nUsuario = this.data.usuario_id;
    this.oUsuario$ = this.oJSONPlaceHolderService.getUser(this.nUsuario);
  }

  ngOnInit() { }
}
