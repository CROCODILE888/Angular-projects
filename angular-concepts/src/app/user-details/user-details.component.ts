import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user">
    <h3><a (click)="goBack()">{{user.first_name}} {{user.last_name}}</a></h3><br><hr>
    <h5>Email: {{user.email}}</h5>
    <h5>Gender: {{user.gender}}</h5>
    <h5>Phone number: {{user.phone_number}}</h5><br>
    
    <button type="button" (click)="goBack()">Back to all Users</button>
  </div><br><br><hr><br>
  `,
  styles: ``
})
export class UserDetailsComponent implements OnInit{
  users: Users[]=[];
  user: Users|undefined;

  constructor(private usersService: UsersService, private location: Location, private route: ActivatedRoute){}
  ngOnInit(): void {
      const userIdFromRoute=Number(this.route.snapshot.paramMap.get("userId"));

      this.usersService.getUsers().subscribe((response: any)=>{
        this.users=response.users;

        //find the clicked user
        this.user=this.users.find((u:any)=>u.id===userIdFromRoute)
      })
  }

  goBack(){
    this.location.back();
  }
}
