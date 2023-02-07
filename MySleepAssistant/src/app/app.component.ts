import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sleep Stats', url: '/pages/Sleep_Stats/sleep-stats', icon: 'alarm' },
    { title: 'Calendar View', url: '/pages/Calendar_View/calendar-view', icon: 'calendar' },
    { title: 'Settings', url: '/pages/Settings/settings', icon: 'settings' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
