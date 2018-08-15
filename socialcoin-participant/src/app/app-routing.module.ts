import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListActivitiesComponent } from './activities/list-activities/list-activities.component';
import { DetailActivityComponent } from './activities/detail-activity/detail-activity.component';
import { BalanceComponent } from './activities/balance/balance.component';
import { ListActivitiesToolbarComponent } from './list-activities-toolbar/list-activities-toolbar.component';
import { BackToLastPageToolbarComponent } from './back-to-last-page-toolbar/back-to-last-page-toolbar.component';
import { SimpleToolbarComponent } from './simple-toolbar/simple-toolbar.component';


const routes: Routes = [
  { path: '', redirectTo : "/activity/list", pathMatch : "full"},
  { path: 'activity/list', component: ListActivitiesComponent, data: {toolbar: ListActivitiesToolbarComponent} },
  { path: 'activity/detail', component: DetailActivityComponent, data: {toolbar: BackToLastPageToolbarComponent} },
  { path: 'activity/balance', component: BalanceComponent, data: {toolbar: SimpleToolbarComponent} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
