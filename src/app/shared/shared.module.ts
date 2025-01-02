import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    MediaPlayerComponent,
    SideBarComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
