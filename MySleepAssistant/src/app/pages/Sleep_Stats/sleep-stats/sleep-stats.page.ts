import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  public sleep_score = 20;
  public sleep_reccomendation_text = "Go to sleep. This will improve the amount of deep and rem sleep that you get";
  public sleep_duration = "2h 41m";
  public light_sleep_ratio = 70;
  public deep_sleep_ratio = 15;
  public rem_sleep_ratio = 15;
  public currentDateString2 = "";
  public prevDateString2 = "";


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    if (this.dateObj2.getMonth() + 1 < 10)
      this.currentDateString2 = this.dateObj2.getFullYear().toString() + '-0' + (this.dateObj2.getMonth()+1).toString() + '-';
    else
      this.currentDateString2 = this.dateObj2.getFullYear().toString() + '-' + (this.dateObj2.getMonth()+1).toString() + '-';

    if (this.dateObj2.getDate() < 10)
      this.currentDateString2 += '0' + this.dateObj2.getDate().toString() + 'T00:00:00';
    else
      this.currentDateString2 += this.dateObj2.getDate().toString() + 'T00:00:00';

    this.prevDate2 = this.dateObj2;
    this.prevDate2.setDate(this.prevDate2.getDate() - 30)
    console.log(this.prevDate2.getDate())
    // console.log(this.prevDate) 

    if (this.prevDate2.getMonth() + 1 < 10)
      this.prevDateString2 = this.prevDate2.getFullYear().toString() + '-0' + (this.prevDate2.getMonth()+1).toString() + '-';
    else
      this.prevDateString2 = this.prevDate2.getFullYear().toString() + '-' + (this.prevDate2.getMonth()+1).toString() + '-';

    if (this.prevDate2.getDate() < 10)
      this.prevDateString2 += '0' + this.prevDate2.getDate().toString() + 'T00:00:00';
    else
      this.prevDateString2 += this.prevDate2.getDate().toString() + 'T00:00:00';
    
    // console.log(this.prevDateString)

  }
}
