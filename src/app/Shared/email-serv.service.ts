import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class EmailServService {

  constructor(public http:HttpClient) { }
  EmailURL:string='https://localhost:7102/api/EmailApi/send';

  sendEmail(viewModel:any): Observable<any> {
    debugger
    Swal.fire({
      title: 'Email sent',
      text: 'Email sent successfuly',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  return this.http.post(this.EmailURL,viewModel)
}
}
