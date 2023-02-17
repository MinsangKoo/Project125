import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.page.html',
  styleUrls: ['./calendar-view.page.scss'],
})
export class CalendarViewPage implements OnInit {

  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute) { }


  public seeWeekView() {
    console.log("Seeing week view");
  }

  public seeMonthView() {
    console.log("Seeing month view");
  }

  ngOnInit() {
  }

}
