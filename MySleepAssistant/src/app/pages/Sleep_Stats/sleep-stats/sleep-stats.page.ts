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
  public dateObj = new Date();
  public prevDate = new Date();
  public sleep_score = 20;
  public sleep_reccomendation_text = "You better go to BED right NOWWWWWWW. This will improve the amount of deep and rem sleep that you get";
  public sleep_duration = "2h 41m";
  public light_sleep_ratio = 70;
  public deep_sleep_ratio = 15;
  public rem_sleep_ratio = 15;
  public currentDateString = "";
  public prevDateString = "";


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    if (this.dateObj.getMonth() + 1 < 10)
      this.currentDateString = this.dateObj.getFullYear().toString() + '-0' + (this.dateObj.getMonth()+1).toString() + '-';
    else
      this.currentDateString = this.dateObj.getFullYear().toString() + '-' + (this.dateObj.getMonth()+1).toString() + '-';

    if (this.dateObj.getDate() < 10)
      this.currentDateString += '0' + this.dateObj.getDate().toString() + 'T00:00:00';
    else
      this.currentDateString += this.dateObj.getDate().toString() + 'T00:00:00';

    this.prevDate = this.dateObj;
    this.prevDate.setDate(this.prevDate.getDate() - 30)
    console.log(this.prevDate.getDate())
    // console.log(this.prevDate) 

    if (this.prevDate.getMonth() + 1 < 10)
      this.prevDateString = this.prevDate.getFullYear().toString() + '-0' + (this.prevDate.getMonth()+1).toString() + '-';
    else
      this.prevDateString = this.prevDate.getFullYear().toString() + '-' + (this.prevDate.getMonth()+1).toString() + '-';

    if (this.prevDate.getDate() < 10)
      this.prevDateString += '0' + this.prevDate.getDate().toString() + 'T00:00:00';
    else
      this.prevDateString += this.prevDate.getDate().toString() + 'T00:00:00';
    
    // console.log(this.prevDateString)

  }
}
