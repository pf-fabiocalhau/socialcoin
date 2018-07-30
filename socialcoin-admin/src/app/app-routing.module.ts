import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NtMenuComponent } from './nt-menu/nt-menu.component';
import { RegisterParticipantComponent } from './register-participant/register-participant.component';
import { RegisterActivityComponent } from './register-activity/register-activity.component';
import { RegisterNeighborTeamComponent } from './register-neighbor-team/register-neighbor-team.component';
import { AssignActivityNeighborTeamComponent } from './assign-activity-neighbor-team/assign-activity-neighbor-team.component';
import { ShowActivityListComponent } from './show-activity-list/show-activity-list.component';
import { ShowActivityDetailComponent } from './show-activity-detail/show-activity-detail.component';
import { AssignActivityParticipantComponent } from './assign-activity-participant/assign-activity-participant.component';
import { CheckCompletedActivityComponent } from './check-completed-activity/check-completed-activity.component';
import { AcceptRejectCompletedActivityComponent } from './accept-reject-completed-activity/accept-reject-completed-activity.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'admin', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'nt', redirectTo: '/nt-menu', pathMatch: 'full' },
  { path: 'nt-menu', component: NtMenuComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'register-participant', component: RegisterParticipantComponent },
  { path: 'register-activity', component: RegisterActivityComponent },
  { path: 'register-neighbor-team', component: RegisterNeighborTeamComponent },
  { path: 'assign-activity-neighbor-team', component: AssignActivityNeighborTeamComponent },
  { path: 'assign-activity-participant', component: AssignActivityParticipantComponent },
  { path: 'show-activity-list', component: ShowActivityListComponent },
  { path: 'show-activity-detail', component: ShowActivityDetailComponent },
  { path: 'check-completed-activity', component: CheckCompletedActivityComponent },
  { path: 'accept-reject-completed-activity', component: AcceptRejectCompletedActivityComponent }
]

@NgModule({
  exports: [
    RouterModule

  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
