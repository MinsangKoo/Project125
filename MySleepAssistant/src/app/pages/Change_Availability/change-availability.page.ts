import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-availability',
  templateUrl: './change-availability.page.html',
  styleUrls: ['./change-availability.page.scss'],
})
export class ChangeAvailabilityPage implements OnInit {

  public folder!: string;
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
