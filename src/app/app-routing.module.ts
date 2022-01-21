import { PersonDetailsComponent } from './Person-details/Person-details.component';
import { AddressDetailsComponent } from './Address-details/Address-details.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{
  path:'Address',
  component:AddressDetailsComponent,
},
{
  path:'Persons',
  component:PersonDetailsComponent,
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
