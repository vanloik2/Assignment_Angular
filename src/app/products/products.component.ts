import { HandleApiService } from './../services/handle-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private handleApiService: HandleApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: any;

  getProducts() {
    this.handleApiService.getRecords('products').subscribe((data) => {
      this.products = data;
    });
  }

  onDelete(id: number) {
    if(confirm("Xác nhận xóa !") == true){
      this.handleApiService.deleteRecord('products', id).subscribe((data) => {
        this.getProducts();
      });
    }
  }

  parentChangeStatus(newStatus: number, record: any) {
    this.handleApiService
      .updateRecord('products', record.id,{...record, status: newStatus})
      .subscribe((data) => {
        this.getProducts();
      });
  }

}
