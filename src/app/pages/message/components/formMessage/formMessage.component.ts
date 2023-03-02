import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ListMessageModel } from 'src/app/models/message/message.model';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-formMessage',
  templateUrl: './formMessage.component.html',
  styleUrls: ['./formMessage.component.css']
})
export class FormMessageComponent implements OnInit {
  messageForm:FormGroup;
  isLoading:boolean;
  data:ListMessageModel
  @Output() dataChange:EventEmitter<ListMessageModel>=new EventEmitter<ListMessageModel>()
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
    this.messageService.postMessage(this.messageForm.value).subscribe({
      next:(dataMessage)=>{
        this.dataChange.emit(dataMessage.dato)
        this.messageForm.reset()
      },
      error:()=>{

      }
    })
  }
}
