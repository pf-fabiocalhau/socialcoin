import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RegisterParticipantComponent } from './register-participant/register-participant.component';
import { RegisterActivityComponent } from './register-activity/register-activity.component';
import { RegisterNeighborTeamComponent } from './register-neighbor-team/register-neighbor-team.component';
import { AssignActivityNeighborTeamComponent } from './assign-activity-neighbor-team/assign-activity-neighbor-team.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'register-participant', component: RegisterParticipantComponent },
  { path: 'register-activity', component: RegisterActivityComponent },
  { path: 'register-neighbor-team', component: RegisterNeighborTeamComponent },
  { path: 'assign-activity-neighbor-team', component: AssignActivityNeighborTeamComponent }

]

@NgModule({
  exports: [
    RouterModule

  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
