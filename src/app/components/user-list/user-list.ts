import { Component } from '@angular/core';
import { JSONPlaceHolderService } from '../../services/jsonplaceholder';
import { User } from '../../models/userInterface';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  standalone: true
})

export class UserList {

  users: User[] = [];

  constructor(public JSONPlHoldService: JSONPlaceHolderService) {
  }
  
  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.JSONPlHoldService.getAllUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }
}
