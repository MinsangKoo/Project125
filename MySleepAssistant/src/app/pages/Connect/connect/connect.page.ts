import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../../PersonService';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  public email = '';
  public password = '';

  constructor(public personService: PersonService) {}

  public applyPushed() {
    console.log("Settings applied in connect1");
  }

  ngOnInit() {
    console.log(this.personService.getPerson().sleep_availability);
  }
}
