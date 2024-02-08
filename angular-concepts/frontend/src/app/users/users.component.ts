import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

interface IRow {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone_number: number;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

@Component({
  selector: 'app-users',
  template: `
<h3>Users: </h3><span><p>// using httpClient and httpClientModule to fetch json data from nodejs server api</p></span><br>
<ag-grid-angular
  class="ag-theme-quartz"
  style="width: 100%; height: 650px;"
    [rowData]="rowData"
    [columnDefs]="colDefs"
    [defaultColDef]="defaultColDef"
    (gridReady)="onGridReady($event)">
    
  </ag-grid-angular><br><br><hr><br>
    

    <div *ngFor="let user of users">
 <ul><h6><u><li><a [title]="user.first_name + user.last_name" [routerLink]="['/users', user.id]">{{user.first_name}} {{user.last_name}}</a></li></u></h6></ul>
 
</div>
  `,
  styles: ``
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService, private http: HttpClient) { };

  onGridReady(params: GridReadyEvent) {
    
    this.http.get<any>('http://localhost:3000/users').subscribe(
      
    (data) => {this.rowData = data.users;
      console.log('Data from API:', data.users)  }
  );
  }
  rowData: IRow[] = [];
  colDefs: ColDef[] = [
    { field: "first_name" },
    { field: "last_name" },
    { field: "email" },
    { field: "gender" },
    {field: "phone_number"},
  ];

  defaultColDef: ColDef = {
    filter: true
  }
  users: Users[] = [];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response: any) => {
      this.users = response.users;
    })
  }
}
