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

  ngOnInit() {
    console.log("Hello from calendar view html page")
    console.log(this.activatedRoute.snapshot.paramMap)
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
