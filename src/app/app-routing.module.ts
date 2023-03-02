import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppmainComponent } from './layout/full/appmain/appmain.component';

const routes: Routes = [
  {
    path:'',
    component:AppmainComponent,
    children:[
      {
        //componente de personal  medico
        path: 'example',
        loadChildren: () =>
          import('./pages/message/message.module').then((m) => m.MessageModule),
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
