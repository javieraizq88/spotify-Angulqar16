import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaPlayerComponent } from './shared/components/media-player/media-player.component';

@NgModule({
  declarations: [ // componentes, directivas, declaraciones, pipes
    AppComponent, 
    MediaPlayerComponent
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
