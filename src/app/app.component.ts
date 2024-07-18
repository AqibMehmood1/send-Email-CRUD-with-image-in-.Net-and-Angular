import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { EmployeeService } from './Shared/employee.service';
import { ImagCompComponent } from './imag-comp/imag-comp.component';
import { RouterLink } from '@angular/router';
import { EmailComComponent } from './email-com/email-com.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,ImagCompComponent,RouterLink,EmailComComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
