import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedButtonComponent } from './components/red-button/red-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RedButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [RedButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
