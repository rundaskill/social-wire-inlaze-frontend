import { Component, OnInit } from '@angular/core';
import { CurrentUserValueModel } from './models/auth/auth.model';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'social-wire-inlaze-frontend';
  user:CurrentUserValueModel
  constructor(public authService:AuthService) {
    
  }
  ngOnInit() {
    this.user= this.authService.currentUserValue
  }

}
