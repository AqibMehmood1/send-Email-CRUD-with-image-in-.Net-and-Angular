import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ProductDTO {
  productName: string;
  imageFile: File;
}

export interface ProductUpdateDTO {
  id: number;
  productName: string;
  productImage: string;
  imageFile?: File;
}

@Injectable({
  providedIn: 'root'
})
export class ImageServService {

  constructor(private http: HttpClient) {}
  ProductURL: string = 'https://localhost:7102/api/products';

  getProducts(): Observable<any> {
    return this.http.get(this.ProductURL);
  }
  
  UpdateProducts(product: ProductUpdateDTO): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Id', product.id.toString());
    formData.append('ProductName', product.productName);
    formData.append('ProductImage', product.productImage);
    if (product.imageFile) {
      formData.append('ImageFile', product.imageFile);
    }

    return this.http.put(`${this.ProductURL}/${product.id}`, formData).pipe(
      catchError(this.handleError)
    );
  }

  delete(viewModel: any): Observable<any> {
    return this.http.delete(`${this.ProductURL}/${viewModel.id}`);
  }

  createProduct(product: ProductDTO): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('ProductName', product.productName);
    formData.append('ImageFile', product.imageFile);

    return this.http.post(this.ProductURL, formData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
