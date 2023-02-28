import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caffiene-tracker',
  templateUrl: './caffiene-tracker.page.html',
  styleUrls: ['./caffiene-tracker.page.scss'],
})
export class CaffieneTrackerPage implements OnInit {

  public numberOfCups = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
