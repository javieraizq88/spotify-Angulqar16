import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "tracks",
    loadChildren: () =>  import("@modules/tracks/tracks.module").then(m => m.TracksModule)
  },
  {
    path: "favorites",
    loadChildren: () =>  import("@modules/favorites/favorite-page.module").then(m => m.FavoritePageModule)
  },
  {
    path: "history",
    loadChildren: () =>  import("@modules/history/history.module").then(m => m.HistoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
