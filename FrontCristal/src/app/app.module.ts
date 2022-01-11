import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Material } from './material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
