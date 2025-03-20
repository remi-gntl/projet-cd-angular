import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListCDComponent } from './list-cd/list-cd.component';
import { HomeComponent } from './home/home.component';
import { NewCDComponent } from './new-cd/new-cd.component';

@NgModule({
  declarations: [
    AppComponent,
    CdComponent,
    HeaderComponent,
    ListCDComponent,
    HomeComponent,
    NewCDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
