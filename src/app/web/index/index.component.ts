import { HandleApiService } from './../../services/handle-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private handleApiService: HandleApiService) { }

  ngOnInit(): void {
    this.getPhones()
  }

  phones: any;

  getPhones(){
    this.handleApiService.getRecords('products?_limit=4').subscribe(
      (data) => {
        this.phones = data
        console.log(data);
        
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
