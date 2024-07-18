import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) {}
  employeeURL:string='https://localhost:7102/api/Employee';

getEmployee():Observable<any>{
  return this.http.get<any>(this.employeeURL)
}
deleteEmployee(viewModel:any){
  return this.http.delete(`${this.employeeURL}/${viewModel.id}`)
}
addEmployee(viewModel:any): Observable<any> {
  return this.http.post(this.employeeURL,viewModel)
}
updateEmployee(viewModel:any): Observable<any> {
  return this.http.put(`${this.employeeURL}/${viewModel.id}`,viewModel)
}

}
