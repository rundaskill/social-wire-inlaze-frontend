import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CurrentUserValueModel } from './models/auth/auth.model';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MessageService]
})
export class AppComponent implements OnInit {
  title = 'social-wire-inlaze-frontend';
  user:CurrentUserValueModel
  view:"seeAll"=null
  constructor(public authService:AuthService) {
    
  }
  ngOnInit() {
    this.user= this.authService.currentUserValue
  }

}
