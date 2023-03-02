import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appmain',
  templateUrl: './appmain.component.html',
  styleUrls: ['./appmain.component.scss']
})
export class AppmainComponent implements OnInit {
  @Output() activateView:EventEmitter<"seeAll">=new EventEmitter<"seeAll">()

  constructor() { }

  ngOnInit() {
  }

}
