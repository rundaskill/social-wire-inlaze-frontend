import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageRoutes } from './message.routing';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutes
  ],
  declarations: [MessageComponent,CardComponent]
})
export class MessageModule { }
