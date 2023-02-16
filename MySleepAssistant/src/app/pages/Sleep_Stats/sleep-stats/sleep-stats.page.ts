import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person, Averages, sleep_day } from '../../../../classes';
import * as sleep_algo from '../../../../sleep_algo';

///MySleepAssistant/src/classes.ts
@Component({
  selector: 'app-sleep-stats',
  templateUrl: './sleep-stats.page.html',
  styleUrls: ['./sleep-stats.page.scss'],
})
export class SleepStatsPage implements OnInit {
  public folder!: string;
  public date = '2/23/2003';
  public dateObj2 = new Date();
  public prevDate2 = new Date();
  public sleep_score = 15;
  public sleep_reccomendation_text =
    'Go to sleep. This will improve the amount of deep and rem sleep that you get';
  public sleep_duration = '2h 41m';
  public light_sleep_ratio = 70;
  public deep_sleep_ratio = 15;
  public rem_sleep_ratio = 15;
  public currentDateString2 = '';
  public prevDateString2 = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    var p = new Person(22, 'm');
    var s = new sleep_day(15, 50, 35, 360);
    p.addDay(s);
    // let t = sleep_algo.calculate_sleepscore(p);

    // console.log(t);
    console.log('hello');

    if (this.dateObj2.getMonth() + 1 < 10)
      this.currentDateString2 =
        this.dateObj2.getFullYear().toString() +
        '-0' +
        (this.dateObj2.getMonth() + 1).toString() +
        '-';
    else
      this.currentDateString2 =
        this.dateObj2.getFullYear().toString() +
        '-' +
        (this.dateObj2.getMonth() + 1).toString() +
        '-';

    if (this.dateObj2.getDate() < 10)
      this.currentDateString2 +=
        '0' + this.dateObj2.getDate().toString() + 'T00:00:00';
    else
      this.currentDateString2 +=
        this.dateObj2.getDate().toString() + 'T00:00:00';

    this.prevDate2 = this.dateObj2;
    this.prevDate2.setDate(this.prevDate2.getDate() - 30);
    console.log(this.prevDate2.getDate());
    // console.log(this.prevDate)

    if (this.prevDate2.getMonth() + 1 < 10)
      this.prevDateString2 =
        this.prevDate2.getFullYear().toString() +
        '-0' +
        (this.prevDate2.getMonth() + 1).toString() +
        '-';
    else
      this.prevDateString2 =
        this.prevDate2.getFullYear().toString() +
        '-' +
        (this.prevDate2.getMonth() + 1).toString() +
        '-';

    if (this.prevDate2.getDate() < 10)
      this.prevDateString2 +=
        '0' + this.prevDate2.getDate().toString() + 'T00:00:00';
    else
      this.prevDateString2 += this.prevDate2.getDate().toString() + 'T00:00:00';

    // console.log(this.prevDateString)
  }
}
