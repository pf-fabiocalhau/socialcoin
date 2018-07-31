import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterParticipantComponent } from './ca/register-participant/register-participant.component';
import { RegisterActivityComponent } from './ca/register-activity/register-activity.component';
import { RegisterNeighborTeamComponent } from './ca/register-neighbor-team/register-neighbor-team.component';
import { AssignActivityNeighborTeamComponent } from './ca/assign-activity-neighbor-team/assign-activity-neighbor-team.component';
import { MenuComponent as NtMenuComponent} from './nt/menu/menu.component';
import { ShowActivityListComponent } from './nt/show-activity-list/show-activity-list.component';
import { ShowActivityDetailComponent } from './nt/show-activity-detail/show-activity-detail.component';
import { AssignActivityParticipantComponent } from './nt/assign-activity-participant/assign-activity-participant.component';
import { CheckCompletedActivityComponent } from './nt/check-completed-activity/check-completed-activity.component';
import { AcceptRejectCompletedActivityComponent } from './nt/accept-reject-completed-activity/accept-reject-completed-activity.component';
import { AssignParticipantNeighborTeamComponent } from './ca/assign-participant-neighbor-team/assign-participant-neighbor-team.component';
import { MenuComponent as CaMenuComponent } from './ca/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
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
    AcceptRejectCompletedActivityComponent,
    AssignParticipantNeighborTeamComponent,
    CaMenuComponent
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
