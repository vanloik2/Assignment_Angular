import { Router, ActivatedRoute } from '@angular/router';
import { HandleApiService } from './../services/handle-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface IData {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  status: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  postForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    image: new FormControl(''),
    status: new FormControl(0),
  });
  constructor(
    private handleApiService: HandleApiService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  product: any;
  imageUpload :any

  ngOnInit(): void {
    const id = Number(this.routes.snapshot.paramMap.get('id'));

    this.handleApiService.getRecord('products', id).subscribe((res) => {
      this.product = res;
      
      this.imageUpload = document.querySelector('.image-upload');
      this.imageUpload.style.backgroundImage = `url(${this.product.image})`;

      this.product.status = this.product.status.toString();

      this.postForm.patchValue(this.product);
    });
  }

  onSubmit(data: IData) {
    data.status = Number(data.status);
    this.handleApiService
      .updateRecord('products', this.product.id, data)
      .subscribe((res) => {
        if(confirm("Về danh sách !") == true){
          this.router.navigate(['/admin/products']);
        }
      });
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.postForm.patchValue({
          image: reader.result,
        });
      this.imageUpload.style.backgroundImage = `url(${reader.result})`;
    };
    }
  }
}
