import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  { path: 'tasks', loadChildren: () => import('./task/task.module').then((m) => m.TaskModule) },
  { path: 'timer', loadChildren: () => import('./timer/timer.module').then((m) => m.TimerModule) },
  { path: 'history', loadChildren: () => import('./history/history.module').then((m) => m.HistoryModule) },
  {
    path: '',
    redirectTo: 'timer',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
