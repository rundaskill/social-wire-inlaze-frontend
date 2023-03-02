import { Component, OnInit } from '@angular/core';

import { ListMessageModel } from 'src/app/models/message/message.model';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-allMessage',
  templateUrl: './allMessage.component.html',
  styleUrls: ['./allMessage.component.css']
})
export class AllMessageComponent implements OnInit {
  data:ListMessageModel[];
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.getAllMessage()
  }
  getAllMessage(){
    this.messageService.getAllMessage().subscribe({
      next:(messages)=>{
        this.data=messages
      },
      error:()=>{

      }
    })
  }

}
