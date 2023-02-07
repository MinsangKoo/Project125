import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sleep-stats',
  templateUrl: './sleep-stats.page.html',
  styleUrls: ['./sleep-stats.page.scss'],
})
export class SleepStatsPage implements OnInit {

  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("Hello from sleep stats html page")
    console.log(this.activatedRoute.snapshot.paramMap)
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
