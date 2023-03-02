import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListMessageModel } from 'src/app/models/message/message.model';
import { MessageService } from 'src/app/services/message/message.service';


@Component({
  selector: 'app-formFilter',
  templateUrl: './formFilter.component.html',
  styleUrls: ['./formFilter.component.css']
})
export class FormFilterComponent implements OnInit {

  filterMessageForm:FormGroup;
  isLoading:boolean;
  constructor(private fb: FormBuilder,private messageService:MessageService ) { }

  ngOnInit() {
    this.generateForm()
  }

  generateForm(){
    this.filterMessageForm=this.fb.group({
      title:[],
      creado_at:[]
    })
  }
  
  searchMessage(){
    this.messageService.filterMessage(this.filterMessageForm.value).subscribe(
      {
        next:(messages:ListMessageModel[])=>{
          console.log(messages);
          
        }
      }
    )
  }

}
