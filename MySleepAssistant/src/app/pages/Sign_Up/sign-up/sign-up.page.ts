import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public dateObj = new Date();
  public prevDate = new Date();
  public currentDateString = '';
  public prevDateString = '';

  // Input Fields
  public name = '';
  public gender = '';
  public birthday = '';

  constructor() {}

  ngOnInit() {
    if (this.dateObj.getMonth() + 1 < 10)
      this.currentDateString =
        this.dateObj.getFullYear().toString() +
        '-0' +
        (this.dateObj.getMonth() + 1).toString() +
        '-';
    else
      this.currentDateString =
        this.dateObj.getFullYear().toString() +
        '-' +
        (this.dateObj.getMonth() + 1).toString() +
        '-';

    if (this.dateObj.getDate() < 10)
      this.currentDateString +=
        '0' + this.dateObj.getDate().toString() + 'T00:00:00';
    else
      this.currentDateString += this.dateObj.getDate().toString() + 'T00:00:00';

    this.prevDate = this.dateObj;
    this.prevDate.setDate(this.prevDate.getDate() - 30);
    this.prevDate.setFullYear(this.dateObj.getFullYear() - 100);
    // console.log(this.prevDate.getDate());
    // console.log(this.prevDate)

    if (this.prevDate.getMonth() + 1 < 10)
      this.prevDateString =
        this.prevDate.getFullYear().toString() +
        '-0' +
        (this.prevDate.getMonth() + 1).toString() +
        '-';
    else
      this.prevDateString =
        this.prevDate.getFullYear().toString() +
        '-' +
        (this.prevDate.getMonth() + 1).toString() +
        '-';

    if (this.prevDate.getDate() < 10)
      this.prevDateString +=
        '0' + this.prevDate.getDate().toString() + 'T00:00:00';
    else
      this.prevDateString += this.prevDate.getDate().toString() + 'T00:00:00';
  }
}
