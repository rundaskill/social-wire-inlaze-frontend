import { Component, OnInit } from '@angular/core';

import { ListMessageModel } from 'src/app/models/message/message.model';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-meMessage',
  templateUrl: './meMessage.component.html',
  styleUrls: ['./meMessage.component.css']
})
export class MeMessageComponent implements OnInit {
  data:ListMessageModel[];
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.getMeMessage()
  }
  getMeMessage(){
    this.messageService.getMeAllMessage().subscribe({
      next:(messages)=>{
        this.data=messages
      },
      error:()=>{

      }
    })
  }

}
