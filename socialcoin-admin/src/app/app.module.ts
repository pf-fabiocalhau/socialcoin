import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterParticipantComponent } from './register-participant/register-participant.component';
import { RegisterActivityComponent } from './register-activity/register-activity.component';
import { RegisterNeighborTeamComponent } from './register-neighbor-team/register-neighbor-team.component';
import { AssignActivityNeighborTeamComponent } from './assign-activity-neighbor-team/assign-activity-neighbor-team.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    RegisterParticipantComponent,
    RegisterActivityComponent,
    RegisterNeighborTeamComponent,
    AssignActivityNeighborTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
