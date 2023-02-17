import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect2',
  templateUrl: './connect2.page.html',
  styleUrls: ['./connect2.page.scss'],
})
export class Connect2Page implements OnInit {

  // Input variables
  public email = '';
  public password = '';

  constructor() { }

  public applyPushed() {
    console.log("Settings applied in connect2");
  }

  ngOnInit() {
  }

}
