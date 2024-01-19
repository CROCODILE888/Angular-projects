import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  template: `
    <h3>Users: </h3><span><p>// using httpClient and httpClientModule to fetch json data from nodejs server api</p></span>

    <div *ngFor="let user of users">
 <ul><h6><u><li><a [title]="user.first_name + user.last_name" [routerLink]="['/users', user.id]">{{user.first_name}} {{user.last_name}}</a></li></u></h6></ul>
 
</div>
  `,
  styles: ``
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) { };

  users: Users[] = [];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response: any) => {
      this.users = response.users;
    })
  }
}
