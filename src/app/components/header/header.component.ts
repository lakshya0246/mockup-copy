import { Component, OnInit } from '@angular/core';
import { RAJAT_BHANDARI } from 'src/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDetails = RAJAT_BHANDARI;
  constructor() {}

  ngOnInit(): void {}
}
