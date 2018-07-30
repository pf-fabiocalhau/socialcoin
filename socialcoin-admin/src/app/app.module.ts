import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterParticipantComponent } from './register-participant/register-participant.component';
import { RegisterActivityComponent } from './register-activity/register-activity.component';
import { RegisterNeighborTeamComponent } from './register-neighbor-team/register-neighbor-team.component';
import { AssignActivityNeighborTeamComponent } from './assign-activity-neighbor-team/assign-activity-neighbor-team.component';
import { NtMenuComponent } from './nt-menu/nt-menu.component';
import { ShowActivityListComponent } from './show-activity-list/show-activity-list.component';
import { ShowActivityDetailComponent } from './show-activity-detail/show-activity-detail.component';
import { AssignActivityParticipantComponent } from './assign-activity-participant/assign-activity-participant.component';
import { CheckCompletedActivityComponent } from './check-completed-activity/check-completed-activity.component';
import { AcceptRejectCompletedActivityComponent } from './accept-reject-completed-activity/accept-reject-completed-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    RegisterParticipantComponent,
    RegisterActivityComponent,
    RegisterNeighborTeamComponent,
    AssignActivityNeighborTeamComponent,
    NtMenuComponent,
    ShowActivityListComponent,
    ShowActivityDetailComponent,
    AssignActivityParticipantComponent,
    CheckCompletedActivityComponent,
    AcceptRejectCompletedActivityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
