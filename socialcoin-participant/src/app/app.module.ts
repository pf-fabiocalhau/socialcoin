import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListActivitiesComponent } from './activities/list-activities/list-activities.component';
import { DetailActivityComponent } from './activities/detail-activity/detail-activity.component';
import { BalanceComponent } from './activities/balance/balance.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListActivitiesComponent,
    DetailActivityComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
