import { Component, OnInit } from '@angular/core';
import { RAJAT_BHANDARI } from 'src/data';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userDetails = RAJAT_BHANDARI;

  constructor() {}

  ngOnInit(): void {}
}
