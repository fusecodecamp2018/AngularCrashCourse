import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvengerComponent } from './avenger/avenger.component';
import { SelectedAvengerComponent } from './selected-avenger/selected-avenger.component';

@NgModule({
  declarations: [
    AppComponent,
    AvengerComponent,
    SelectedAvengerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
