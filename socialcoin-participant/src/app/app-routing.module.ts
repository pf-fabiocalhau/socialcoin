import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListActivitiesComponent } from './activities/list-activities/list-activities.component';
import { DetailActivityComponent } from './activities/detail-activity/detail-activity.component';
import { BalanceComponent } from './activities/balance/balance.component';

const routes: Routes = [
  { path: '', component: ListActivitiesComponent},
  { path: 'activity/detail', component: DetailActivityComponent },
  { path: 'activity/balance', component: BalanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
