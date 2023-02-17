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
  public mondayStart = "";
  public mondayEnd = "";
  public tuesdayStart = "";
  public tuesdayEnd = "";
  public wednesdayStart = "";
  public wednesdayEnd = "";
  public thursdayStart = "";
  public thursdayEnd = "";
  public fridayStart = "";
  public fridayEnd = "";
  public saturdayStart = "";
  public saturdayEnd = "";
  public sundayStart = "";
  public sundayEnd = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
