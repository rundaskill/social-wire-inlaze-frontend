import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  activate:boolean=true
  constructor(private appComponent:AppComponent) { }

  ngOnInit() {
  }
  menu(view:"seeAll"|"meAll"|"crear"){
    this.appComponent.changeView(view)
    this.activate=false
  }
  logout(){
    this.appComponent.authService.logout()
  }
}
