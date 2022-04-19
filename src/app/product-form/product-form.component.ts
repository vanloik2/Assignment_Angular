import { HttpClient } from '@angular/common/http';
import { HandleApiService } from './../services/handle-api.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IData {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  status: number;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  postForm = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    status: ['1'],
    image: ['',
  [
    Validators.required
  ]
],
  });

  constructor(
    private handleService: HandleApiService,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  fileName = '';

  ngOnInit(): void {}

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.postForm.patchValue({
          image: reader.result,
        });
        this.fileName = file.name.slice(0, 10) + '----';
      };
    }
  }

  onSubmit(data: IData) {
    data.status = Number(data.status);
    data.price = Number(data.price);
    data.quantity = Number(data.quantity);

    this.handleService.createRecord('products', data).subscribe((res) => {
      if (confirm('Về danh sách !') == true) {
        this.router.navigate(['/admin/products'])
      }
    });
  }
}
