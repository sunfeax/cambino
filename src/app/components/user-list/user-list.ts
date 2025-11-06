import { Component, inject, Inject } from '@angular/core';
import { JSONPlaceHolderService } from '../../services/jsonplaceholder';
import { User } from '../../models/userInterface';
import { MatDialog } from '@angular/material/dialog';
import { UnroutedData } from '../unrouted-data/unrouted-data';

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
}
