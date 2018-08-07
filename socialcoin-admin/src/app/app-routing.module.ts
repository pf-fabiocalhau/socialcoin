import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent as NtMenuComponent} from './nt/menu/menu.component';
import { RegisterParticipantComponent } from './ca/register-participant/register-participant.component';
import { RegisterActivityComponent } from './ca/register-activity/register-activity.component';
import { RegisterNeighborTeamComponent } from './ca/register-neighbor-team/register-neighbor-team.component';
import { AssignActivityNeighborTeamComponent } from './ca/assign-activity-neighbor-team/assign-activity-neighbor-team.component';
import { ShowActivityDetailComponent } from './nt/show-activity-detail/show-activity-detail.component';
import { AssignActivityParticipantComponent } from './nt/assign-activity-participant/assign-activity-participant.component';
import { CheckCompletedActivityComponent } from './nt/check-completed-activity/check-completed-activity.component';
import { AcceptRejectCompletedActivityComponent } from './nt/accept-reject-completed-activity/accept-reject-completed-activity.component';
import { AssignParticipantNeighborTeamComponent } from './ca/assign-participant-neighbor-team/assign-participant-neighbor-team.component';
import { MenuComponent as CaMenuComponent } from './ca/menu/menu.component';
import { HomeComponent as CaHomeCompenent } from './ca/home/home.component';
import { HomeComponent as NtHomeComponent } from './nt/home/home.component';

const routes: Routes = [
  { path: 'ca', redirectTo: '/ca/home', pathMatch: 'full' },
  { path: 'nt', redirectTo: '/nt/home', pathMatch: 'full' },
  { path: 'ca/home', component: CaHomeCompenent},
  { path: 'nt/home', component: NtHomeComponent},
  { path: 'ca/menu', component: CaMenuComponent },
  { path: 'ca/register-participant', component: RegisterParticipantComponent },
  { path: 'ca/register-activity', component: RegisterActivityComponent },
  { path: 'ca/register-neighbor-team', component: RegisterNeighborTeamComponent },
  { path: 'ca/assign-activity-neighbor-team', component: AssignActivityNeighborTeamComponent },
  { path: 'ca/assign-participant-neighbor-team', component: AssignParticipantNeighborTeamComponent },
  { path: 'nt/assign-activity-participant', component: AssignActivityParticipantComponent },
  { path: 'nt/show-activity-detail', component: ShowActivityDetailComponent },
  { path: 'nt/check-completed-activity', component: CheckCompletedActivityComponent },
  { path: 'nt/accept-reject-completed-activity', component: AcceptRejectCompletedActivityComponent }
];

@NgModule({
  exports: [
    RouterModule

  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
