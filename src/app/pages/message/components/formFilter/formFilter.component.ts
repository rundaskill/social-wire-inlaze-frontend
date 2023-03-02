import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterListMessageModel, ListMessageModel } from 'src/app/models/message/message.model';
import { MessageService } from 'src/app/services/message/message.service';


@Component({
  selector: 'app-formFilter',
  templateUrl: './formFilter.component.html',
  styleUrls: ['./formFilter.component.css']
})
export class FormFilterComponent implements OnInit {
  @Input() set onlyDate(date){
    this.activateOnlyDate=date;
  }
  @Output() listMessage:EventEmitter<ListMessageModel[]>=new EventEmitter<ListMessageModel[]>()
  filterMessageForm:FormGroup;
  isLoading:boolean;
  activateOnlyDate:boolean;
  constructor(private fb: FormBuilder,private messageService:MessageService, private date:DatePipe ) { }

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
    const { title,creado_at}=this.filterMessageForm.value;
    const filtro:FilterListMessageModel={
      title,
      creado_at:creado_at?this.date.transform(creado_at,"YYYY-MM-dd"):null
    }
    if (this.activateOnlyDate) {
      this.messageService.filterMeMessage(filtro).subscribe({
        next:(messages:ListMessageModel[])=>{
          this.listMessage.emit(messages)
        }
      })
      return;
    }
    this.messageService.filterMessage(filtro).subscribe(
      {
        next:(messages:ListMessageModel[])=>{
          this.listMessage.emit(messages)
        }
      }
    )
  }

}
