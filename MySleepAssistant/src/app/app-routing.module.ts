import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',

    redirectTo: 'pages/Sign_Up/sign-up',

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

    path: 'pages/Connect/connect',
    loadChildren: () => import('./pages/Connect/connect/connect.module').then( m => m.ConnectPageModule)
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
    path: 'pages/Change_Availability/change-availability',
    loadChildren: () => import('./pages/Change_Availability/change-availability.module').then( m => m.ChangeAvailabilityPageModule)
  },
  {
    path: 'pages/Connect2/connect2',
    loadChildren: () => import('./pages/Connect2/connect2/connect2.module').then( m => m.Connect2PageModule)
  }

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
