import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm:FormGroup;
  isLoading:boolean;
  error:string;
  constructor(private fb: FormBuilder,private loginService:AuthService) { }

  ngOnInit() {
    this.generarForm()
  }

  generarForm(){
    this.loginForm=this.fb.group({
      email:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.compose([Validators.required])]
    })
  }
  login(){
    this.loginService.login(this.loginForm.value).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
