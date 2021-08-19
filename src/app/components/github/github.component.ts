import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import * as moment from 'moment';

// Models
import { Users } from '../../models/Users';
import { User } from 'src/app/models/User';
import { Repo } from '../../models/Repo';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  username: string;

  users: Users['items'];
  user: User;
  repos: Repo[];

  userCreatedAt: string;

  constructor(private githubService: GithubService) {}

  ngOnInit() {}

  searchUser(username: string) {
    this.githubService.searchUser(username).subscribe((users) => {
      this.users = users.items;
    });
  }

  selectedUser(username: string) {
    this.githubService.getUser(username).subscribe((user) => {
      this.user = user;

      this.userCreatedAt = moment(user.created_at).format('DD MMMM YYYY');
    });

    this.githubService.getRepos(username).subscribe((repos) => {
      this.repos = repos;
    });
  }
}
