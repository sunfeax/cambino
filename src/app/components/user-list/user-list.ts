import { Component, inject } from '@angular/core';
import { JSONPlaceHolderService } from '../../services/jsonplaceholder';
import { User } from '../../models/userInterface';
import { MatDialog } from '@angular/material/dialog';
import { UnroutedData } from '../unrouted-data/unrouted-data';
import { UnroutedData2 } from '../unrouted-data2/unrouted-data2';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  standalone: true
})

export class UserList {

  users: User[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private JSONPlHoldService: JSONPlaceHolderService) {
  }

  ngOnInit() {
    this.getUserList();
  }

  showData(user: User) {
    this.dialog.open(UnroutedData, {
      width: '600px',
      height: '400px',
      data: {
        usuario: user,
      }
    })
  }

  getUserList() {
    this.JSONPlHoldService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  verDatosUsuario2(user: User) {
    this.dialog.open(UnroutedData2, {
      height: '400px',
      width: '600px',
      data: {
        usuario_id: user.id,
      }
    });
  }
}
