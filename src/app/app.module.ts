import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ // componentes, directivas, declaraciones, pipes
    AppComponent, 
  ],
  imports: [ // solo se importan otros modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
