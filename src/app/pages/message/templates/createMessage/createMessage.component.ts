import { Component, OnInit } from '@angular/core';
import { ListMessageModel } from 'src/app/models/message/message.model';

@Component({
  selector: 'app-createMessage',
  templateUrl: './createMessage.component.html',
  styleUrls: ['./createMessage.component.css']
})
export class CreateMessageComponent implements OnInit {
  data:ListMessageModel[]=[];
  constructor() { }

  ngOnInit() {
  }

}
