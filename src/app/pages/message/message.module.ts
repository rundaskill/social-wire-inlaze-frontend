import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageRoutes } from './message.routing';
import { CardComponent } from './components/card/card.component';
import { FormFiltroComponent } from './components/formFiltro/formFiltro.component';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MessageRoutes,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  declarations: [MessageComponent,CardComponent,FormFiltroComponent],
  exports:[MessageComponent]
})
export class MessageModule { }
