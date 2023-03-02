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
@NgModule({
  imports: [
    CommonModule,
    MessageRoutes,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [MessageComponent,CardComponent,FormFilterComponent],
  exports:[MessageComponent]
})
export class MessageRedModule { }
