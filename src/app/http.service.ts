import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from './users/user';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((data: any) => {
        return data.map((user: any) =>  new User(user.name, user.email, user.website)
        );
      })
    );
  }

  addUser(user: User) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }
}
