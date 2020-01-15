import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'theater-list',
    loadChildren: () => import('./theater-list/theater-list.module').then( m => m.TheaterListPageModule)
  },
  {
    path: 'seat-selection',
    loadChildren: () => import('./seat-selection/seat-selection.module').then( m => m.SeatSelectionPageModule)
  },
  {
    path: 'info-modal',
    loadChildren: () => import('./info-modal/info-modal.module').then( m => m.InfoModalPageModule)
  },
  {
    path: 'calendar-modal',
    loadChildren: () => import('./calendar-modal/calendar-modal.module').then( m => m.CalendarModalPageModule)
  },
  {
    path: 'seat-type-modal',
    loadChildren: () => import('./seat-type-modal/seat-type-modal.module').then( m => m.SeatTypeModalPageModule)
  },
  {
    path: 'theater-seat-map',
    loadChildren: () => import('./theater-seat-map/theater-seat-map.module').then( m => m.TheaterSeatMapPageModule)
  },
  {
    path: 'payment-modal',
    loadChildren: () => import('./payment-modal/payment-modal.module').then( m => m.PaymentModalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'nearby-theater',
    loadChildren: () => import('./nearby-theater/nearby-theater.module').then( m => m.NearbyTheaterPageModule)
  },
  {
    path: 'movies-list',
    loadChildren: () => import('./movies-list/movies-list.module').then( m => m.MoviesListPageModule)
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
