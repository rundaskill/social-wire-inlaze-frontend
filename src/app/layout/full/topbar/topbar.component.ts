import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  constructor(private appComponent:AppComponent) { }

  ngOnInit() {
  }
  menu(data:"seeAll"){
    this.appComponent.view=data
  }

}
