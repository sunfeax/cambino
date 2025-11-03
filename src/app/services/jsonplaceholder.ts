import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userInterface';

@Injectable({
    providedIn: 'root'
})

export class JSONPlaceHolderService {
    constructor(private httpClient: HttpClient) {
    }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
