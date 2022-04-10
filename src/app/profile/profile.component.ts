import { HandleApiService } from './../services/handle-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private  handleApiService : HandleApiService) { }

  ngOnInit(): void {
    this.getProfile()
  }

  profile: any

  getProfile(){
    this.handleApiService.getRecords('profile').subscribe(
      data => {
        this.profile = data
      },
      error => {
        console.log(error);
      }
    )
  }

}
