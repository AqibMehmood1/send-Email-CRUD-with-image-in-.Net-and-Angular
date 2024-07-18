import { RouterModule, Routes } from '@angular/router';
import { ImagCompComponent } from './imag-comp/imag-comp.component';
import { SimpleCompComponent } from './simple-comp/simple-comp.component';
import { EmailComComponent } from './email-com/email-com.component';
export const routes: Routes = [
    { path: '', redirectTo: '/EmailComp', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent },
    { path: 'ImagComp', component: ImagCompComponent },
    { path: 'SimpleComp', component: SimpleCompComponent },
    { path: 'EmailComp', component: EmailComComponent },
    
];
