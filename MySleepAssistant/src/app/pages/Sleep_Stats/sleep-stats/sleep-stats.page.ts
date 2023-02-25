import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Person, Averages, sleep_day, time} from '../../../../classes';
import {Date as customDate} from '../../../../classes';
import * as sleep_algo from '../../../../sleep_algo';

///MySleepAssistant/src/classes.ts
@Component({
  selector: 'app-sleep-stats',
  templateUrl: './sleep-stats.page.html',
  styleUrls: ['./sleep-stats.page.scss'],
})
export class SleepStatsPage implements OnInit {
  public date = '2/23/2003';
  public dateObj2 = new Date();
  public prevDate2 = new Date();
  public currentDateString2 = '';
  public prevDateString2 = '';
  public selectedDateString = '';
  public sleep_score = 15;
  public sleep_reccomendation_text =
    'Go to sleep. This will improve the amount of deep and rem sleep that you get';
  public sleep_duration = '2h 41m';
  public light_sleep_ratio = 70;
  public deep_sleep_ratio = 15;
  public rem_sleep_ratio = 15;
  

  constructor(private activatedRoute: ActivatedRoute) {}

  // This function makes it so that the user can only select dates in the last 30 days
  setDateCalenderMinMax() {
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
    // console.log(this.prevDate2.getDate());
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
  }

 // This function is called whenever the user changes the date
  changeSelectedDate() {
    TODO: // Change all the information on this page to reflect the data in the date that the user changed to

    // Retrieve our person from the PersonService
    // Get the sleep day object pertaining to the date that they selected on the calendar
    // Update all the information on this page
    
    // console.log(this.currentDateString2);
    // console.log(this.selectedDateString);
    return;
  }

  ngOnInit() {
    var p = new Person("John", 22, 'm');
    var btime = new time(12, 0, "AM")
    var wtime = new time(9, 0, "AM")
    var date = new customDate(12, 5, 2022)
    var s = new sleep_day(15, 50, 35, 360, btime, wtime, 0, date);
    p.addDay(s);
    let t = sleep_algo.calculate_sleepscore(p, s);

    this.setDateCalenderMinMax();
  }
}
