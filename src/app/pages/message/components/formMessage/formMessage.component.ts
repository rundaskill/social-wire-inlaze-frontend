import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ListMessageModel } from 'src/app/models/message/message.model';

@Component({
  selector: 'app-formMessage',
  templateUrl: './formMessage.component.html',
  styleUrls: ['./formMessage.component.css']
})
export class FormMessageComponent implements OnInit {
  messageForm:FormGroup;
  isLoading:boolean;
  data:ListMessageModel
  constructor(private fb: FormBuilder,private messageService:MessageService) { }

  ngOnInit() {
    this.generateForm()
  }
  generateForm(){
    this.messageForm=this.fb.group({
      title:[this.data?.title||"",Validators.required],
      message:[this.data?.message||"",Validators.required]
    })
  }
  shareMessage(){
    
  }
}
