import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() name: string = 'alert-circle';
  @Input() size: number = 24;
  @Input() color: string = 'currentColor';
  @Input() style: string = ``;
  constructor() {}

  ngOnInit(): void {}
}
