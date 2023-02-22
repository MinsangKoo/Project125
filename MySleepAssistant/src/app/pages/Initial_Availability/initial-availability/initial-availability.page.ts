import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/classes';
import { time } from 'src/classes';
import { PersonService } from '../../../../PersonService';

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
    // console.log(new Date(this.mondayStart).toLocaleTimeString());

    // var mondayStartDate = new Date(this.mondayStart);
    // let mondayStartHour = '';
    // for (let i of mondayStartDate.toLocaleTimeString())
    // {
    //   if (i != ':')
    //   {
    //     mondayStartHour += i;
    //   }
    //   else
    //   {
    //     break;
    //   }
    // }
    // let mondayStartHourInt = parseInt(mondayStartHour);
    // string amOrPm = mondayStartString[-2:];
    // mondayStartMinutes = new Date(this.mondayStart).getMinutes();
    // mondayStartString = mondayStartDate.toLocaleTimeString()  
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

    
    
    




  }

  ngOnInit() {

    // let variables = [this.mondayStart, this.mondayEnd];
    // console.log(variables[0]);
    
  }

}
