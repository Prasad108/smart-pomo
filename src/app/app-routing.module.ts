import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
