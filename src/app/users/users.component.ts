import { HandleApiService } from './../services/handle-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private handleApiService : HandleApiService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  users: any

  getUsers(){
    this.handleApiService.getRecords('users').subscribe(
      (data) => {
        this.users = data
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
