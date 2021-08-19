import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users } from '../models/Users';
import { User } from '../models/User';
import { Repo } from '../models/Repo';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseURL = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {}

  searchUser(username: string): Observable<Users> {
    return this.httpClient.get<Users>(
      `${this.baseURL}/search/users?q=${username}`
    );
  }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/users/${username}`);
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.httpClient.get<Repo[]>(
      `${this.baseURL}/users/${username}/repos?sort=created&order=asc`
    );
  }
}
