import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Person, Averages, sleep_day, time} from '../../../../classes';
import {Date as customDate} from '../../../../classes';
import { PersonService } from 'src/PersonService';
import * as sleep_algo from '../../../../sleep_algo';
// import { IonModal } from '@ionic/angular';
// import { OverlayEventDetail } from '@ionic/core/components';

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
  public sleep_reccomendation_array: String[] = [];
  public sleep_duration = '2h 41m';
  public light_sleep_ratio = 70;
  public deep_sleep_ratio = 15;
  public rem_sleep_ratio = 15;

  

  constructor(private activatedRoute: ActivatedRoute, public personService: PersonService) {}

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
    // console.log(this.prevDate2.getDate())s;
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
  changeSelectedDate($event: any) {
    //TODO: Change all the information on this page to reflect the data in the date that the user changed to
    // selectedDateString
    var date = new Date($event);
    var person = this.personService.getPerson()
    var sleep_data = person.sleep_data
    var month = String(Number(date.getMonth()) + 1)
    var year = date.getFullYear()
    var day = date.getDate()
    var new_date = month + day + year
    var new_sleep_day = null;
    console.log(new_date)
    console.log(sleep_data)
    for (let i = 0; i < sleep_data.length; i++) {
      console.log(sleep_data[i].getDateString());
      if (sleep_data[i].getDateString() == new_date) {
        new_sleep_day = sleep_data[i]
        // alert(new_sleep_day.getDate())
        
        console.log(new_sleep_day.getRem());
        this.rem_sleep_ratio = new_sleep_day.getRem();
        this.deep_sleep_ratio = new_sleep_day.getDeep();
        this.light_sleep_ratio = new_sleep_day.getLight();
        var sleep_duration_hours = String(Math.floor(new_sleep_day.getSleeptime() / 60));
        var sleep_duration_minutes = String(Math.floor(new_sleep_day.getSleeptime() % 60));
        this.sleep_duration = sleep_duration_hours + 'h ' + sleep_duration_minutes + 'm';
        this.sleep_score = Math.floor(new_sleep_day.getSleepscore());

        for (let i = 0; i < new_sleep_day.getRecommendations().length; i++)
        {
          this.sleep_reccomendation_array.push(new_sleep_day.getRecommendations()[i]);
        }

        break
      }
    }



    
    // Retrieve our person from the PersonService
    // Get the sleep day object pertaining to the date that they selected on the calendar
    // Update all the information on this page
    // will have to loop through sleep day array in person
    // console.log(this.currentDateString2);
    // console.log(this.selectedDateString);
    return;
  }

  ngOnInit() {
    // var p = new Person("John", 22, 'm');
    // var btime = new time(12, 0, "AM")
    // var wtime = new time(9, 0, "AM")
    // var date = new customDate(12, 5, 2022)
    // var s = new sleep_day(15, 50, 35, 360, btime, wtime, 0, date);
    // p.addDay(s);
    // let t = sleep_algo.calculate_sleepscore(p, s);

    // this.sleep_score = s.sleep_score;

    var date = new Date();
    var day = String(date.getDate());
    var month = String(date.getMonth() + 1);
    var year = String(date.getFullYear());

    var person = this.personService.getPerson()
    var sleep_data = person.sleep_data

    var dateString = month + day + year;
    var new_sleep_day = null;

    for (let i = 0; i < sleep_data.length; i++) {
      console.log(sleep_data[i].getDateString());
      if (sleep_data[i].getDateString() == dateString) {
        new_sleep_day = sleep_data[i]
        // alert(new_sleep_day.getDate())
        
        console.log(new_sleep_day.getRem());
        this.rem_sleep_ratio = new_sleep_day.getRem();
        this.deep_sleep_ratio = new_sleep_day.getDeep();
        this.light_sleep_ratio = new_sleep_day.getLight();
        var sleep_duration_hours = String(Math.floor(new_sleep_day.getSleeptime() / 60));
        var sleep_duration_minutes = String(Math.floor(new_sleep_day.getSleeptime() % 60));
        this.sleep_duration = sleep_duration_hours + 'h ' + sleep_duration_minutes + 'm';
        this.sleep_score = Math.floor(new_sleep_day.getSleepscore());

        for (let i = 0; i < new_sleep_day.getRecommendations().length; i++)
        {
          this.sleep_reccomendation_array.push(new_sleep_day.getRecommendations()[i]);
        }

        break
      }
    }


    this.setDateCalenderMinMax();
  }
}
