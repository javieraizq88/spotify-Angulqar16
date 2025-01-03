import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPlayerComponent } from './shared/components/card-player/card-player.component';


@NgModule({
  declarations: [ // componentes, directivas, declaraciones, pipes
    AppComponent, CardPlayerComponent, 
  ],
  imports: [ // solo se importan otros modules
    BrowserModule,
    AppRoutingModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
