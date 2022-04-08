import { HandleApiService } from './../services/handle-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IData {
  name: string,
  description: string,
  price: number, 
  image: string, 
  status: number
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  postForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    price : new FormControl(''),
    image : new FormControl(''),
    status : new FormControl(0)
  })
  constructor( 
    private handleService: HandleApiService,
    private router : Router
  ) { 
    
  }

  ngOnInit(): void {
  }
  
  onSubmit( data: IData){
    data.status = Number(data.status)
    data.price = Number(data.price)
    
    this.handleService.createRecord('products', data).subscribe( res =>{
      this.router.navigate(['/admin/products'])
    })

  }

}
