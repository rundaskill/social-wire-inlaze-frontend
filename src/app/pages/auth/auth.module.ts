import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './singUp/singUp.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ProgressBarModule,
    ButtonModule,
    FormsModule
  ],
  declarations: [AuthComponent,LoginComponent,SingUpComponent],
  exports:[AuthComponent]
})
export class AuthModule { }
