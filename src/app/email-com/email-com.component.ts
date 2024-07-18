import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailServService } from '../Shared/email-serv.service';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-email-com',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,ToastModule],
  templateUrl: './email-com.component.html',
  styleUrl: './email-com.component.css'
})
export class EmailComComponent implements OnInit{
show() {
throw new Error('Method not implemented.');
}
  emailForm: FormGroup;
  constructor(public fb:FormBuilder, public EmailServ:EmailServService){}
ngOnInit(): void {
  this.emailForm=new FormGroup({
    To:new FormControl(),
    Subject:new FormControl(),
    Body:new FormControl(),
  })
}
  onSubmit() {
    debugger
    this.EmailServ.sendEmail(this.emailForm.value).subscribe(()=>{
      
    })
  }
}