import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageRoutes } from './message.routing';
import { CardComponent } from './components/card/card.component';
import { FormFiltroComponent } from './components/formFiltro/formFiltro.component';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutes
  ],
  declarations: [MessageComponent,CardComponent,FormFiltroComponent]
})
export class MessageModule { }
