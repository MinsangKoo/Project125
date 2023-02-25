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
    // This is our time class 
    let time = this.helperAvailability(variables[i]);
    // This is the string representation that we get from changing our start or end times
    let strTime = variables[i]
    // This is our key name
    let key = keyNames[i];
    
    this.personService.setAvailability(key, time, strTime);

  }

    console.log(this.personService.getPerson().sleep_availability);

  }

  // Take in our Person from PersonService and check their availability. 
  // Set all availabilities to the saved availabilities

  ngOnInit() {
    
    let savedAvailability = this.personService.getPerson().getSleepAvailability();


    this.mondayStart = savedAvailability.get("mondayStart")![1];
    this.mondayEnd = savedAvailability.get("mondayEnd")![1];
    this.tuesdayStart = savedAvailability.get("tuesdayStart")![1];
    this.tuesdayEnd = savedAvailability.get("tuesdayEnd")![1];
    this.wednesdayStart = savedAvailability.get("wednesdayStart")![1];
    this.wednesdayEnd = savedAvailability.get("wednesdayEnd")![1];
    this.thursdayStart = savedAvailability.get("thursdayStart")![1];
    this.thursdayEnd = savedAvailability.get("thursdayEnd")![1];
    this.fridayStart = savedAvailability.get("fridayStart")![1];
    this.fridayEnd = savedAvailability.get("fridayEnd")![1];
    this.saturdayStart = savedAvailability.get("saturdayStart")![1];
    this.saturdayEnd = savedAvailability.get("saturdayEnd")![1];
    this.sundayStart = savedAvailability.get("sundayStart")![1];
    this.sundayEnd = savedAvailability.get("sundayEnd")![1];




    
  }

}
