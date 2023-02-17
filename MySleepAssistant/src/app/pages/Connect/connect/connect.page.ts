import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  public email = '';
  public password = '';

  constructor() {}

  public applyPushed() {
    console.log("Settings applied in connect1");
  }

  ngOnInit() {}
}
