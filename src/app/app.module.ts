import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SalesCardComponent } from './sales-card/sales-card.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { ReportsGraphComponent } from './reports-graph/reports-graph.component';
import { TasksComponent } from './tasks/tasks.component';
import { MessagesComponent } from './messages/messages.component';
import { ActivityComponent } from './activity/activity.component';
import { TaskComponent } from './task/task.component';
import { MessegeComponent } from './messege/messege.component';
import { ActivitiesComponent } from './activities/activities.component';
import { LayoutService } from './layout-service.service';



@NgModule({
  declarations: [
    AppComponent,
    SideNavMenuComponent,
    HeaderMenuComponent,
    SalesCardComponent,
    ReportsGraphComponent,
    TasksComponent,
    MessagesComponent,
    ActivityComponent,
    TaskComponent,
    MessegeComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
