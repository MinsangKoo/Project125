import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../../PersonService';
import { time } from 'src/classes';

@Component({
  selector: 'app-change-availability',
  templateUrl: './change-availability.page.html',
  styleUrls: ['./change-availability.page.scss'],
})
export class ChangeAvailabilityPage implements OnInit {

  
  public mondayStart = "2023-02-23T21:00:00-08:00";
  public mondayEnd = "2023-02-23T08:00:00-08:00";
  public tuesdayStart = "2023-02-23T21:00:00-08:00";
  public tuesdayEnd = "2023-02-23T08:00:00-08:00";
  public wednesdayStart = "2023-02-23T21:00:00-08:00";
  public wednesdayEnd = "2023-02-23T08:00:00-08:00";
  public thursdayStart = "2023-02-23T21:00:00-08:00";
  public thursdayEnd = "2023-02-23T08:00:00-08:00";
  public fridayStart = "2023-02-23T21:00:00-08:00";
  public fridayEnd = "2023-02-23T08:00:00-08:00";
  public saturdayStart = "2023-02-23T21:00:00-08:00";
  public saturdayEnd = "2023-02-23T08:00:00-08:00";
  public sundayStart = "2023-02-23T21:00:00-08:00";
  public sundayEnd = "2023-02-23T08:00:00-08:00";

  constructor(private activatedRoute: ActivatedRoute, public personService: PersonService) { }

  public helperAvailability(datestring: string) {
    let theDate = new Date(datestring);
    let theDateHour = '';
    for (let i of theDate.toLocaleTimeString())
    {
      if (i != ':')
      {
        theDateHour += i;
      }
      else
      {
        break;
      }
    }

    let theDateHourInt = parseInt(theDateHour);
    let amOrPm = theDate.toLocaleTimeString().slice(-2);
    let theDateMinutes = theDate.getMinutes();

    let theTime = new time(theDateHourInt, theDateMinutes, amOrPm);
    return theTime;
  }
  
  public storeAvailability() {
    let keyNames = ["mondayStart", "mondayEnd",
                    "tuesdayStart", "tuesdayEnd",
                    "wednesdayStart", "wednesdayEnd",
                    "thursdayStart", "thursdayEnd",
                    "fridayStart", "fridayEnd",
                    "saturdayStart", "saturdayEnd",
                    "sundayStart", "sundayEnd"];

    let variables = [this.mondayStart, this.mondayEnd,
                     this.tuesdayStart, this.tuesdayEnd,
                     this.wednesdayStart, this.wednesdayEnd,
                     this.thursdayStart, this.thursdayEnd,
                     this.fridayStart, this.fridayEnd,
                     this.saturdayStart,this.saturdayEnd,
                     this.sundayStart, this.sundayEnd];
    
    
    for (let i = 0; i < variables.length; i++) {
      let time = this.helperAvailability(variables[i]);
      let key = keyNames[i];
      this.personService.setAvailability(key, time);

    }

    console.log(this.personService.getPerson().sleep_availability);

  }

  ngOnInit() { 
  }

}
