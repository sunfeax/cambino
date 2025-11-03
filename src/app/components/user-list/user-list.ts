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

  constructor(private JSONPlHoldService: JSONPlaceHolderService) {
  }
  
  ngOnInit() {
    this.getUserList();
  }

  showData(user: User) {
    console.log(user);
  }

  getUserList() {
    this.JSONPlHoldService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
