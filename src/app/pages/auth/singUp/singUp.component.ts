import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

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
  constructor(private fb: FormBuilder,private loginService:AuthService) { }

  ngOnInit() {
    this.generarForm()
  }
  generarForm(){
    this.signUpForm=this.fb.group({
      nickName:[],
      fullName:[],
      email:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.compose([Validators.required])]
    })
  }
  signUp(){

  }
}
