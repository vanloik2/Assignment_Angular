import { HandleApiService } from './../../services/handle-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-product-detail',
  templateUrl: './client-product-detail.component.html',
  styleUrls: ['./client-product-detail.component.css']
})
export class ClientProductDetailComponent implements OnInit {

  product: any

  constructor(
    private handleService : HandleApiService,
    private routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.routes.snapshot.paramMap.get('id'))

    this.getProduct(id)
  }

  getProduct(id :number){
    this.handleService.getRecord('products', id).subscribe( res =>{
      this.product = res
    })
  }

}
