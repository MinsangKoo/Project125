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
  public sleep_score = 20;
  public sleep_reccomendation_text = "Go to BED!!!!";
  public sleep_duration = "2h 41m";
  public light_sleep_ratio = 70;
  public deep_sleep_ratio = 15;
  public rem_sleep_ratio = 15;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("Hello from sleep stats html page")
    console.log(this.activatedRoute.snapshot.paramMap)
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
