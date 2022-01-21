import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './Person-details/Person-details.component';
import { AddressDetailsComponent } from './Address-details/Address-details.component'
import { PersonDetailFormComponent } from './Person-details/Person-detail-form/Person-detail-form.component';
import { AddressDetailFormComponent } from './Address-details/Address-detail-form/Address-detail-form.component'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    PersonDetailFormComponent ,
     AddressDetailsComponent,
     AddressDetailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
