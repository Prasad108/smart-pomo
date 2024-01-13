import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HistoryListComponent,StatisticsComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    IonicModule
  ]
})
export class HistoryModule { }
