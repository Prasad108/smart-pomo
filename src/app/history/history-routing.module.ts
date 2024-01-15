import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryListComponent } from './history-list/history-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HistoryListComponent },
  { path: 'statistics', component: StatisticsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule { }
