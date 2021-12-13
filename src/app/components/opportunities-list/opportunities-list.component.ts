import { Component, OnInit } from '@angular/core';
import { OPPORTUNITIES, Opportunity } from 'src/data';

@Component({
  selector: 'app-opportunities-list',
  templateUrl: './opportunities-list.component.html',
  styleUrls: ['./opportunities-list.component.scss'],
})
export class OpportunitiesListComponent implements OnInit {
  opportunities = OPPORTUNITIES;
  constructor() {}

  ngOnInit(): void {}

  opportunitiesTrackBy(index: number, opportunity: Opportunity) {
    return opportunity.id;
  }
}
