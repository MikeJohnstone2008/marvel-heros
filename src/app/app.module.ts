import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetMarvelHerosService } from './get-marvel-heros.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    GetMarvelHerosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
