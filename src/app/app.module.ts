import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppmainComponent } from './layout/full/appmain/appmain.component';
import { TopbarComponent } from './layout/full/topbar/topbar.component';
import { AuthModule } from './pages/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { AuthTokenPermissionService } from './interceptors/auth-token-permission.service';
import { MessageRedModule } from "./pages/message/message.module";
import {MessageModule} from 'primeng/message';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AppmainComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    MessageRedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenPermissionService,
      multi: true,
    },
    MessageService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
