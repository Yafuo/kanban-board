import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CreateItemComponent } from './home/create-item/create-item.component';
import {BsDatepickerModule, ModalModule} from 'ngx-bootstrap';
import { EditItemComponent } from './home/edit-item/edit-item.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  entryComponents: [CreateItemComponent, EditItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
