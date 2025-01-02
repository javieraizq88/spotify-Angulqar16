import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritePageRoutingModule } from './favorite-page-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';



@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoritePageRoutingModule
  ]
})
export class FavoritePageModule { }
