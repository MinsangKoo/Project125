import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../../PersonService';
import { ToastController} from "@ionic/angular";
import { calculate_sleepscore } from 'src/sleep_algo';
import { Date, time, Person, sleep_day } from 'src/classes';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  public email = '';
  public password = '';

  constructor(public personService: PersonService, private toastController: ToastController) {}

  public applyPushed() {
    console.log("Settings applied in connect1");
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Success!",
      duration: 1500,
      position: 'top'
    });
    toast.present()
  }

  ngOnInit() {
    console.log(this.personService.getPerson().sleep_availability);

    let p = this.personService.getPerson();
      

    let sleepDay = new sleep_day(18.25, 54.50, 27.25, 429, new time(10,51,'PM'), new time(6,0,'AM'), 1, new Date(2,8,2023));
    let sleepDay2 = new sleep_day(21.38, 47.79, 30.83, 595, new time(9,36,'PM'), new time(7,31,'AM'), 0, new Date(2,9,2023));
    let sleepDay3 = new sleep_day(8.67, 58.97, 32.36, 469, new time(10,12,'PM'), new time(6,1,'AM'), 0, new Date(2,10,2023));
    let sleepDay4 = new sleep_day(15.14, 56.61, 28.24, 469, new time(11,14,'PM'), new time(7,3,'AM'), 1, new Date(2,11,2023));
    let sleepDay5 = new sleep_day(27.31, 52.67, 20.03, 432, new time(11,41,'PM'), new time(6,53,'AM'), 1, new Date(2,12,2023));
    let sleepDay6 = new sleep_day(15.14, 59.34, 25.52, 474, new time(10,43,'PM'), new time(6,37,'AM'), 0, new Date(2,13,2023));
    let sleepDay7 = new sleep_day(6.91, 67.46, 25.63, 440, new time(10,44,'PM'), new time(6,4,'AM'), 2, new Date(2,14,2023));
    let sleepDay8 = new sleep_day(7.38, 72.73, 19.89, 414, new time(11,14,'PM'), new time(6,8,'AM'), 0, new Date(2,15,2023));
    let sleepDay9 = new sleep_day(14.32, 55.44, 30.25, 511, new time(9,31,'PM'), new time(6,2,'AM'), 1, new Date(2,16,2023));
    let sleepDay10 = new sleep_day(10.63, 67.57, 21.80, 447, new time(11,4,'PM'), new time(6,31,'AM'), 0, new Date(2,17,2023));
    let sleepDay11 = new sleep_day(4.27, 76.60, 19.12, 502, new time(9,45,'PM'), new time(6,7,'AM'), 1, new Date(2,18,2023));
    let sleepDay12 = new sleep_day(12.86, 74.59, 12.56, 369, new time(11,41,'PM'), new time(5,50,'AM'), 0, new Date(2,19,2023));
    let sleepDay13 = new sleep_day(7.99, 61.48, 30.54, 590, new time(9,39,'PM'), new time(7,29,'AM'), 0, new Date(2,20,2023));
    let sleepDay14 = new sleep_day(15.01, 64.94, 20.05, 433, new time(10,44,'PM'), new time(5,57,'AM'), 0, new Date(2,21,2023));
    let sleepDay15 = new sleep_day(5.96, 70.43, 23.60, 467, new time(9,50,'PM'), new time(5,37,'AM'), 1, new Date(2,22,2023));
    let sleepDay16 = new sleep_day(22.04, 55.24, 22.72, 440, new time(10,45,'PM'), new time(6,5,'AM'), 0, new Date(2,23,2023));
    let sleepDay17 = new sleep_day(13.32, 61.93, 24.75, 437, new time(10,45,'PM'), new time(6,2,'AM'), 0, new Date(2,24,2023));
    let sleepDay18 = new sleep_day(11.72, 60.90, 27.38, 461, new time(10,26,'PM'), new time(6,7,'AM'), 1, new Date(2,25,2023));
    let sleepDay19 = new sleep_day(15.87, 61.56, 22.57, 521, new time(10,57,'PM'), new time(7,38,'AM'), 0, new Date(2,26,2023));
    let sleepDay20 = new sleep_day(6.72, 65.59, 27.69, 388, new time(11,31,'PM'), new time(5,59,'AM'), 1, new Date(2,27,2023));
    let sleepDay21 = new sleep_day(14.79, 64.33, 20.89, 481, new time(10,2,'PM'), new time(6,3,'AM'), 1, new Date(2,28,2023));
    let sleepDay22 = new sleep_day(15.81, 60.66, 23.53, 450, new time(10,29,'PM'), new time(5,59,'AM'), 0, new Date(3,1,2023));
    let sleepDay23 = new sleep_day(4.95, 69.01, 26.04, 478, new time(10,44,'PM'), new time(6,42,'AM'), 0, new Date(3,2,2023));
    let sleepDay24 = new sleep_day(8.63, 70.28, 21.09, 437, new time(10,57,'PM'), new time(6,14,'AM'), 2, new Date(3,3,2023));
    let sleepDay25 = new sleep_day(2.33, 68.55, 29.12, 547, new time(10,2,'PM'), new time(7,9,'AM'), 0, new Date(3,4,2023));
    let sleepDay26 = new sleep_day(15.55, 49.08, 35.37, 478, new time(10,45,'PM'), new time(6,43,'AM'), 1, new Date(3,5,2023));
    let sleepDay27 = new sleep_day(16.97, 59.05, 23.98, 539, new time(9,30,'PM'), new time(6,29,'AM'), 0, new Date(3,6,2023));
    let sleepDay28 = new sleep_day(5.31, 63.97, 30.72, 464, new time(10,24,'PM'), new time(6,8,'AM'), 1, new Date(3,7,2023));
    let sleepDay29 = new sleep_day(20.96, 55.30, 23.73, 479, new time(9,56,'PM'), new time(5,55,'AM'), 0, new Date(3,8,2023));
    let sleepDay30 = new sleep_day(20.91, 56.11, 22.97, 428, new time(10,55,'PM'), new time(6,3,'AM'), 0, new Date(3,9,2023));


    this.personService.addDay(sleepDay);
    this.personService.addDay(sleepDay2);
    this.personService.addDay(sleepDay3);
    this.personService.addDay(sleepDay4);
    this.personService.addDay(sleepDay5);
    this.personService.addDay(sleepDay6);
    this.personService.addDay(sleepDay7);
    this.personService.addDay(sleepDay8);
    this.personService.addDay(sleepDay9);
    this.personService.addDay(sleepDay10);
    this.personService.addDay(sleepDay11);
    this.personService.addDay(sleepDay12);
    this.personService.addDay(sleepDay13);
    this.personService.addDay(sleepDay14);
    this.personService.addDay(sleepDay15);
    this.personService.addDay(sleepDay16);
    this.personService.addDay(sleepDay17);
    this.personService.addDay(sleepDay18);
    this.personService.addDay(sleepDay19);
    this.personService.addDay(sleepDay20);
    this.personService.addDay(sleepDay21);
    this.personService.addDay(sleepDay22);
    this.personService.addDay(sleepDay23);
    this.personService.addDay(sleepDay24);
    this.personService.addDay(sleepDay25);
    this.personService.addDay(sleepDay26);
    this.personService.addDay(sleepDay27);
    this.personService.addDay(sleepDay28);
    this.personService.addDay(sleepDay29);
    this.personService.addDay(sleepDay30);


    calculate_sleepscore(p, sleepDay, 29);
    calculate_sleepscore(p, sleepDay2, 28);
    calculate_sleepscore(p, sleepDay3, 27);
    calculate_sleepscore(p, sleepDay4, 26);
    calculate_sleepscore(p, sleepDay5, 25);
    calculate_sleepscore(p, sleepDay6, 24);
    calculate_sleepscore(p, sleepDay7, 23);
    calculate_sleepscore(p, sleepDay8, 22);
    calculate_sleepscore(p, sleepDay9, 21);
    calculate_sleepscore(p, sleepDay10, 20);
    calculate_sleepscore(p, sleepDay11, 19);
    calculate_sleepscore(p, sleepDay12, 18);
    calculate_sleepscore(p, sleepDay13, 17);
    calculate_sleepscore(p, sleepDay14, 16);
    calculate_sleepscore(p, sleepDay15, 15);
    calculate_sleepscore(p, sleepDay16, 14);
    calculate_sleepscore(p, sleepDay17, 13);
    calculate_sleepscore(p, sleepDay18, 12);
    calculate_sleepscore(p, sleepDay19, 11);
    calculate_sleepscore(p, sleepDay20, 10);
    calculate_sleepscore(p, sleepDay21, 9);
    calculate_sleepscore(p, sleepDay22, 8);
    calculate_sleepscore(p, sleepDay23, 7);
    calculate_sleepscore(p, sleepDay24, 6);
    calculate_sleepscore(p, sleepDay25, 5);
    calculate_sleepscore(p, sleepDay26, 4);
    calculate_sleepscore(p, sleepDay27, 3);
    calculate_sleepscore(p, sleepDay28, 2);
    calculate_sleepscore(p, sleepDay29, 1);
    calculate_sleepscore(p, sleepDay30, 0);



  }
}
