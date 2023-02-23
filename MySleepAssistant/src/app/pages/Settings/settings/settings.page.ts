import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/PersonService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public folder!: string;

  // Our input variables
  public name = '';
  public gender = '';

  constructor(private activatedRoute: ActivatedRoute, public personService: PersonService) { }


  public settingsChanged() {
    if (this.name) {
      this.personService.setName(this.name);
    }

    if (this.gender) {
      this.personService.setGender(this.gender);
    }
    
    console.log(this.personService.getPerson().getName());
    console.log(this.personService.getPerson().getGender());

  }

  ngOnInit() {

  }

}
