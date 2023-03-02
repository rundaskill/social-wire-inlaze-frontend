import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppmainComponent } from './layout/full/appmain/appmain.component';
import { TopbarComponent } from './layout/full/topbar/topBar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AppmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
