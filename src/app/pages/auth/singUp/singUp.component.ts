import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-singUp',
  templateUrl: './singUp.component.html',
  styleUrls: ['./singUp.component.css']
})
export class SingUpComponent implements OnInit {
  @Output() signIn:EventEmitter<boolean>= new EventEmitter<boolean>()
  signUpForm:FormGroup;
  isLoading:boolean;
  error:string;
  constructor(private fb: FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.generarForm()
  }
  generarForm(){
    this.signUpForm=this.fb.group({
      nickname:[],
      full_name :[],
      email:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.compose([Validators.required])]
    })
  }
  signUp(){
    this.userService.postUser(this.signUpForm.value).subscribe(
      {
        next:(singUpData)=>{
          this.signIn.emit(false)
        },
        error:(error:HttpErrorResponse)=>{
          error=error.error.message
        }
      }
    )
  }
}
