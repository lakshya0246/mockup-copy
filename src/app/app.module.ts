import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OngoingApplicationsListComponent } from './components/ongoing-applications-list/ongoing-applications-list.component';
import { FilterTabsComponent } from './components/filter-tabs/filter-tabs.component';
import { OpportunitiesListComponent } from './components/opportunities-list/opportunities-list.component';
import { IconComponent } from './components/icon/icon.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';

@NgModule({
  declarations: [AppComponent, UserDetailsComponent, SidebarComponent, OngoingApplicationsListComponent, FilterTabsComponent, OpportunitiesListComponent, IconComponent, NotificationsListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
