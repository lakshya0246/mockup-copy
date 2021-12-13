import { Component, OnInit } from '@angular/core';
import { NOTIFICATIONS, Notification } from 'src/data';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
})
export class NotificationsListComponent implements OnInit {
  notifications = NOTIFICATIONS;
  constructor() {}

  ngOnInit(): void {}

  notificationsTrackBy(index: number, notification: Notification) {
    return notification.id;
  }

  getTimeElapsedInHours(from: Date): string {
    if (from) {
      return ((Date.now() - from.valueOf()) / (60 * 60 * 1000)).toFixed() + 'h';
    }
    return '';
  }
}
