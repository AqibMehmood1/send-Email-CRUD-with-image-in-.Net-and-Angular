import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { EmployeeService } from '../Shared/employee.service';
import { ImagCompComponent } from '../imag-comp/imag-comp.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-simple-comp',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './simple-comp.component.html',
  styleUrl: './simple-comp.component.css'
})
export class SimpleCompComponent implements OnInit{
  regForm:FormGroup;
  showModal:any=false;
  savebtn:string="save"
  Employeedata:any[]
  constructor(public empservice:EmployeeService){

  }
ngOnInit(): void {
  this.removeTextFieldData()
  this.getallemployees()
}
getallemployees(){
  debugger
  this.empservice.getEmployee().subscribe(data=>{
    debugger
    this.Employeedata=data
  })
}
deleteEmp(obj:any){
  // debugger
  this.empservice.deleteEmployee(obj).subscribe(()=>{
    this.getallemployees();
  })
}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.removeTextFieldData();
  }
  OnEditAction(obj:any){
    this.savebtn='Edit'
    this.regForm=new FormGroup({
      id:new FormControl(obj.id),
      fname:new FormControl(obj.fname),
      lname:new FormControl(obj.lname),
      email:new FormControl(obj.email),
      age:new FormControl(),
      doj:new FormControl(),
      gender:new FormControl(obj.gender),
      ismarried:new FormControl(),
      isActive:new FormControl(),
      designationID:new FormControl(),
      designations:new FormControl(),
    })

  }
  OnCreateAction(){
    this.savebtn='Create'
  }
  removeTextFieldData(){
    this.regForm=new FormGroup({
      id:new FormControl(0),
      fname:new FormControl(),
      lname:new FormControl(),
      email:new FormControl(),
      age:new FormControl(),
      doj:new FormControl(),
      gender:new FormControl(),
      ismarried:new FormControl(),
      isActive:new FormControl(),
      designationID:new FormControl(),
      designations:new FormControl(),
    })
  }
  onFormSubmite(){
    if(this.savebtn=="Edit"){
      this.empservice.updateEmployee(this.regForm.value).subscribe(()=>{
        this.getallemployees();
        this.closeModal()
      })
    }
    else if(this.savebtn=="Create"){
      this.empservice.addEmployee(this.regForm.value).subscribe(()=>{
        this.getallemployees();
        this.closeModal()
      })
    }
  }

}
