import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetMarvelHerosService } from './get-marvel-heros.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GetMarvelHerosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// imports: [
//   BrowserModule,
//   HttpModule,
//   FormsModule
// ],
// providers: [
//   JeopardyService
// ],