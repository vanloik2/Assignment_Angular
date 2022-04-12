import { HandleApiService } from './../../services/handle-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-products',
  templateUrl: './client-products.component.html',
  styleUrls: ['./client-products.component.css']
})
export class ClientProductsComponent implements OnInit {

  constructor(
    private handleService : HandleApiService
  ) { }

  ngOnInit(): void {
    this.getProducts()
    
  }

  products: any

  getProducts(){
    this.handleService.getRecords('products').subscribe( res =>{
      this.products = res
      
    })
  }



}
