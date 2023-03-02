import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppmainComponent } from './layout/full/appmain/appmain.component';
import { TopbarComponent } from './layout/full/topbar/topBar.component';
import { AuthModule } from './pages/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from './pages/message/message.module';
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
    MessageModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
