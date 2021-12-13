import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-tabs',
  templateUrl: './filter-tabs.component.html',
  styleUrls: ['./filter-tabs.component.scss'],
})
export class FilterTabsComponent implements OnInit {
  @Input() tabs: string[] = [];
  activeTabIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  setActiveTabIndex(value: number) {
    this.activeTabIndex = value;
  }
}
