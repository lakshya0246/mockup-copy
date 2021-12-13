import { Component, OnInit } from '@angular/core';
import { Application, ONGOING_APPLICATIONS } from 'src/data';

@Component({
  selector: 'app-ongoing-applications-list',
  templateUrl: './ongoing-applications-list.component.html',
  styleUrls: ['./ongoing-applications-list.component.scss'],
})
export class OngoingApplicationsListComponent implements OnInit {
  ongoingApplications = ONGOING_APPLICATIONS;
  expandedCardIndex: number = -1;
  constructor() {}

  ngOnInit(): void {}

  setExpandedCardIndex(value: number) {
    if (value === this.expandedCardIndex) {
      this.expandedCardIndex = -1;
    } else {
      this.expandedCardIndex = value;
    }
  }

  applicationsTrackBy(index: number, application: Application) {
    return application.id;
  }
}
