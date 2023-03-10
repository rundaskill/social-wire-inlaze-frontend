import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageRoutes } from './message.routing';
import { CardComponent } from './components/card/card.component';

import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormFilterComponent } from './components/formFilter/formFilter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { AllMessageComponent } from './templates/allMessage/allMessage.component';
import { MeMessageComponent } from './templates/meMessage/meMessage.component';
import { FormMessageComponent } from './components/formMessage/formMessage.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CreateMessageComponent } from './templates/createMessage/createMessage.component';
@NgModule({
  imports: [
    CommonModule,
    MessageRoutes,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    InputTextareaModule
  ],
  declarations: [MessageComponent,CardComponent,FormFilterComponent,AllMessageComponent,MeMessageComponent,FormMessageComponent,CreateMessageComponent],
  exports:[MessageComponent]
})
export class MessageRedModule { }
