import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup ,ReactiveFormsModule,FormBuilder, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ImageServService,ProductDTO,ProductUpdateDTO } from '../Shared/image-serv.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-imag-comp',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,ImagCompComponent,RouterLink],
  templateUrl: './imag-comp.component.html',
  styleUrl: './imag-comp.component.css'
})

export class ImagCompComponent implements OnInit {
  Productsdata: any[];
  imgForm: FormGroup;
  savebtn: string = "save";
  showModal: boolean = false;
  dumainURL = 'https://localhost:7102/Resources/';
  currentProduct: any = null;

  constructor(public ImageServ: ImageServService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.imgForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(30)]],
      imageFile: [null, Validators.required]
    });
    this.getallproducts();
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.imgForm.reset();
    this.currentProduct = null;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imgForm.patchValue({
        imageFile: file
      });
    }
  }

  onFormSubmite() {
    if (this.savebtn === "Edit" && this.currentProduct) {
      const product: ProductUpdateDTO = {
        id: this.currentProduct.id,
        productName: this.imgForm.get('productName')?.value,
        productImage: this.currentProduct.productImage,
        imageFile: this.imgForm.get('imageFile')?.value
      };

      this.ImageServ.UpdateProducts(product).subscribe(() => {
        this.getallproducts();
        this.closeModal();
      }, (error: HttpErrorResponse) => {
        console.error('There was an error!', error.message);
        this.getallproducts();
        this.closeModal();
      });
    } else if (this.savebtn === "Create") {
      const product: ProductDTO = {
        productName: this.imgForm.get('productName')?.value,
        imageFile: this.imgForm.get('imageFile')?.value
      };

      this.ImageServ.createProduct(product).subscribe(
        response => {
          console.log('Product created successfully!', response);
          this.getallproducts();
          this.closeModal();
        },
        (error: HttpErrorResponse) => {
          console.error('There was an error!', error.message);
          this.getallproducts();
          this.closeModal();
        }
      );
    }
  }

  OnCreateAction() {
    this.savebtn = 'Create';
    this.openModal();
  }

  OnEditAction(obj: any) {
    this.savebtn = 'Edit';
    this.currentProduct = obj;
    this.imgForm.patchValue({
      productName: obj.productName,
      imageFile: null
    });
    this.openModal();
  }

  getallproducts() {
    this.ImageServ.getProducts().subscribe(data => {
      this.Productsdata = data;
      console.log("products data = ", this.Productsdata);
    });
  }

  deleteProducts(obj: any) {
    this.ImageServ.delete(obj).subscribe(() => {
      this.getallproducts();
    });
  }
}
