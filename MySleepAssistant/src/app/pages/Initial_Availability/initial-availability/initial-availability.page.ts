import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initial-availability',
  templateUrl: './initial-availability.page.html',
  styleUrls: ['./initial-availability.page.scss'],
})
export class InitialAvailabilityPage implements OnInit {

  public folder!: string;
  public title = "Welcome to My Sleep Assistant!";
  public message = "To help us better understand you, please tell us the range of hours in which you are typically at home and are able to sleep during.";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
