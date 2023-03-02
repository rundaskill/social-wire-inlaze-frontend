import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ProgressBarModule,
    ButtonModule,
    FormsModule
  ],
  declarations: [AuthComponent],
  exports:[AuthComponent]
})
export class AuthModule { }
