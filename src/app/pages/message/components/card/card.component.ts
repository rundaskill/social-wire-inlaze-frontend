import { Component, Input, OnInit } from '@angular/core';
import { ListMessageModel } from 'src/app/models/message/message.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() set setMessage (msg:ListMessageModel){
    this.message=msg
  }
  message:ListMessageModel;
  constructor() { }

  ngOnInit() {
  }

}
