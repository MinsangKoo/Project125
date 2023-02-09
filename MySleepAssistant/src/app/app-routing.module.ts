import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Sleep Stats',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
