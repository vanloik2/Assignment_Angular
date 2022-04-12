import { Router, ActivatedRoute } from '@angular/router';
import { HandleApiService } from './../services/handle-api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

  postForm = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    status: ['1'],
    image: ['', [Validators.required]],
  });

  constructor(
    private handleApiService: HandleApiService,
    private router: Router,
    private routes: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  product: any;
  imageUpload: any;

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
        if (confirm('Về danh sách !') == true) {
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
