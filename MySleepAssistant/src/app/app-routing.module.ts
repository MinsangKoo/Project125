import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Sign_Up',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pages/Sleep_Stats/sleep-stats',
    loadChildren: () => import('./pages/Sleep_Stats/sleep-stats/sleep-stats.module').then( m => m.SleepStatsPageModule)
  },
  {
    path: 'pages/Calendar_View/calendar-view',
    loadChildren: () => import('./pages/Calendar_View/calendar-view/calendar-view.module').then( m => m.CalendarViewPageModule)
  },
  {
    path: 'pages/Settings/settings',
    loadChildren: () => import('./pages/Settings/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'pages/Initial_Availability/initial-availability',
    loadChildren: () => import('./pages/Initial_Availability/initial-availability/initial-availability.module').then( m => m.InitialAvailabilityPageModule)
  },
  {
    path: 'pages/Sign_Up/sign-up',
    loadChildren: () => import('./pages/Sign_Up/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'change-availability',
    loadChildren: () => import('./pages/Change_Availability/change-availability.module').then( m => m.ChangeAvailabilityPageModule)
  },


  // {
  //   path: 'pages/initial-availability',
  //   loadChildren: () => import('./initial-availability/initial-availability.module').then( m => m.InitialAvailabilityPageModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
