import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ScatterController, LinearScale, PointElement, LineController, CategoryScale, LineElement } from 'chart.js';
import { PersonService } from 'src/PersonService';
import { Date, time, Person, sleep_day } from 'src/classes';
import { calculate_sleepscore } from 'src/sleep_algo';



@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.page.html',
  styleUrls: ['./calendar-view.page.scss'],
})
export class CalendarViewPage implements OnInit {

  public chart: any;
  public weekChart: any;
  public monthChart: any;
 
  constructor(private activatedRoute: ActivatedRoute, public personService: PersonService) { }


  public seeWeekView() {
    console.log("Seeing week view");

    if (this.chart)
    {
      this.chart.destroy();
    }
    if (this.monthChart)
    {
      this.monthChart.destroy();
    }

    const weekLabels: string[] = [];
    const dataLabels: number[] = [];

    let p = this.personService.getPerson();

    // Get the last 7 days' dates to use as x labels
    for (let i = 6; i >= 0; i--) {
      weekLabels.push(p.getDay(i).getDate().printDate());
    }

    // Get the last 7 days' sleep scores to use as y labels
    for (let i = 6; i >= 0; i--) {
      dataLabels.push(p.getDay(i).getSleepscore());
    }



    const weekData = {
      // labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      labels: weekLabels,
      datasets: [{
        label: 'My First Dataset',
        // data: [65, 59, 80, 81, 56, 55, 40],
        data: dataLabels,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };



    Chart.register(ScatterController, LinearScale, LineController, CategoryScale, LineElement, PointElement);
    this.weekChart = new Chart("chart", {
      type: "line",
      data: weekData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: 0,
            max: 100,
            beginAtZero: true,
            title: {
              font: {
                size: 18
              },
              display: true,
              text: 'Sleep Scores'
            }
          },
          x: {
            title: {
              font: {
                size: 18
              },
              display: true,
              text: 'Dates'
            }
          }
        }
      }
      });
    this.chart = this.weekChart;
  }





  public seeMonthView() {
    console.log("Seeing month view");
    if (this.chart)
    {
      this.chart.destroy();
      this.weekChart.destroy();
    }
    const monthLabels: string[] = [];
    const dataLabels: number[] = [];

    let p = this.personService.getPerson();

    // Get the last 7 days' dates to use as x labels
    for (let i = 29; i >= 0; i--) {
      monthLabels.push(p.getDay(i).getDate().printDate());
    }

    // Get the last 7 days' sleep scores to use as y labels
    for (let i = 29; i >= 0; i--) {
      dataLabels.push(p.getDay(i).getSleepscore());
    }

    const monthData = {
      // labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      labels: monthLabels,
      datasets: [{
        label: 'My First Dataset',
        // data: [65, 59, 80, 81, 56, 55, 40],
        data: dataLabels,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    Chart.register(ScatterController, LinearScale, LineController, CategoryScale, LineElement, PointElement);
    this.monthChart = new Chart("chart", {
      type: "line",
      data: monthData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: 0,
            max: 100,
            beginAtZero: true,
            title: {
              font: {
                size: 18
              },
              display: true,
              text: 'Sleep Scores'
            }
          },
          x: {
            title: {
              font: {
                size: 18
              },
              display: true,
              text: 'Dates'
            }
          }
        }
      }
      });
    this.chart = this.monthChart;
  }




  ngOnInit() {

      // Add in some dummy data for a person's sleep days

      let p = this.personService.getPerson();
      
      let sleepDay = new sleep_day(18.25, 54.50, 27.25, 395, new time(10,51,'PM'), new time(6,0,'AM'), 1, new Date(1,23,2023));
      let sleepDay2 = new sleep_day(21.38, 47.79, 30.83, 487, new time(9,36,'PM'), new time(7,31,'AM'), 0, new Date(1,24,2023));
      let sleepDay3 = new sleep_day(8.67, 58.97, 32.36, 410, new time(10,12,'PM'), new time(6,1,'AM'), 0, new Date(1,25,2023));
      let sleepDay4 = new sleep_day(15.14, 56.61, 28.24, 420, new time(11,14,'PM'), new time(7,3,'AM'), 1, new Date(1,26,2023));
      let sleepDay5 = new sleep_day(27.31, 52.67, 20.03, 385, new time(11,41,'PM'), new time(6,53,'AM'), 1, new Date(1,27,2023));
      let sleepDay6 = new sleep_day(15.14, 59.34, 25.52, 453, new time(10,43,'PM'), new time(6,37,'AM'), 0, new Date(1,28,2023));
      let sleepDay7 = new sleep_day(6.91, 67.46, 25.63, 420, new time(10,44,'PM'), new time(6,4,'AM'), 2, new Date(1,29,2023));
      let sleepDay8 = new sleep_day(7.38, 72.73, 19.89, 380, new time(11,14,'PM'), new time(6,8,'AM'), 0, new Date(1,30,2023));
      let sleepDay9 = new sleep_day(14.32, 55.44, 30.25, 465, new time(9,31,'PM'), new time(6,2,'AM'), 1, new Date(1,31,2023));
      let sleepDay10 = new sleep_day(10.63, 67.57, 21.80, 367, new time(11,4,'PM'), new time(6,31,'AM'), 0, new Date(2,1,2023));
      let sleepDay11 = new sleep_day(4.27, 76.60, 19.12, 445, new time(9,45,'PM'), new time(6,7,'AM'), 1, new Date(2,2,2023));
      let sleepDay12 = new sleep_day(12.86, 74.59, 12.56, 335, new time(11,41,'PM'), new time(5,50,'AM'), 0, new Date(2,3,2023));
      let sleepDay13 = new sleep_day(7.99, 61.48, 30.54, 495, new time(9,39,'PM'), new time(7,29,'AM'), 0, new Date(2,4,2023));
      let sleepDay14 = new sleep_day(15.01, 64.94, 20.05, 397, new time(10,44,'PM'), new time(5,57,'AM'), 0, new Date(2,5,2023));
      let sleepDay15 = new sleep_day(5.96, 70.43, 23.60, 403, new time(9,50,'PM'), new time(5,37,'AM'), 1, new Date(2,6,2023));
      let sleepDay16 = new sleep_day(22.04, 55.24, 22.72, 368, new time(10,45,'PM'), new time(6,5,'AM'), 0, new Date(2,7,2023));
      let sleepDay17 = new sleep_day(13.32, 61.93, 24.75, 398, new time(10,45,'PM'), new time(6,2,'AM'), 0, new Date(2,8,2023));
      let sleepDay18 = new sleep_day(11.72, 60.90, 27.38, 431, new time(10,26,'PM'), new time(6,7,'AM'), 1, new Date(2,9,2023));
      let sleepDay19 = new sleep_day(15.87, 61.56, 22.57, 448, new time(10,57,'PM'), new time(7,38,'AM'), 0, new Date(2,10,2023));
      let sleepDay20 = new sleep_day(6.72, 65.59, 27.69, 372, new time(11,31,'PM'), new time(5,59,'AM'), 1, new Date(2,11,2023));
      let sleepDay21 = new sleep_day(14.79, 64.33, 20.89, 386, new time(10,2,'PM'), new time(6,3,'AM'), 1, new Date(2,12,2023));
      let sleepDay22 = new sleep_day(15.81, 60.66, 23.53, 408, new time(10,29,'PM'), new time(5,59,'AM'), 0, new Date(2,13,2023));
      let sleepDay23 = new sleep_day(4.95, 69.01, 26.04, 434, new time(10,44,'PM'), new time(6,42,'AM'), 0, new Date(2,14,2023));
      let sleepDay24 = new sleep_day(8.63, 70.28, 21.09, 406, new time(10,57,'PM'), new time(6,14,'AM'), 2, new Date(2,15,2023));
      let sleepDay25 = new sleep_day(2.33, 68.55, 29.12, 495, new time(10,2,'PM'), new time(7,9,'AM'), 0, new Date(2,16,2023));
      let sleepDay26 = new sleep_day(15.55, 49.08, 35.37, 434, new time(10,45,'PM'), new time(6,43,'AM'), 1, new Date(2,17,2023));
      let sleepDay27 = new sleep_day(16.97, 59.05, 23.98, 442, new time(9,30,'PM'), new time(6,29,'AM'), 0, new Date(2,18,2023));
      let sleepDay28 = new sleep_day(5.31, 63.97, 30.72, 433, new time(10,24,'PM'), new time(6,8,'AM'), 1, new Date(2,19,2023));
      let sleepDay29 = new sleep_day(20.96, 55.30, 23.73, 415, new time(9,56,'PM'), new time(5,55,'AM'), 0, new Date(2,20,2023));
      let sleepDay30 = new sleep_day(20.91, 56.11, 22.97, 340, new time(10,55,'PM'), new time(6,3,'AM'), 0, new Date(2,21,2023));

      calculate_sleepscore(p, sleepDay);
      calculate_sleepscore(p, sleepDay2);
      calculate_sleepscore(p, sleepDay3);
      calculate_sleepscore(p, sleepDay4);
      calculate_sleepscore(p, sleepDay5);
      calculate_sleepscore(p, sleepDay6);
      calculate_sleepscore(p, sleepDay7);
      calculate_sleepscore(p, sleepDay8);
      calculate_sleepscore(p, sleepDay9);
      calculate_sleepscore(p, sleepDay10);
      calculate_sleepscore(p, sleepDay11);
      calculate_sleepscore(p, sleepDay12);
      calculate_sleepscore(p, sleepDay13);
      calculate_sleepscore(p, sleepDay14);
      calculate_sleepscore(p, sleepDay15);
      calculate_sleepscore(p, sleepDay16);
      calculate_sleepscore(p, sleepDay17);
      calculate_sleepscore(p, sleepDay18);
      calculate_sleepscore(p, sleepDay19);
      calculate_sleepscore(p, sleepDay20);
      calculate_sleepscore(p, sleepDay21);
      calculate_sleepscore(p, sleepDay22);
      calculate_sleepscore(p, sleepDay23);
      calculate_sleepscore(p, sleepDay24);
      calculate_sleepscore(p, sleepDay25);
      calculate_sleepscore(p, sleepDay26);
      calculate_sleepscore(p, sleepDay27);
      calculate_sleepscore(p, sleepDay28);
      calculate_sleepscore(p, sleepDay29);
      calculate_sleepscore(p, sleepDay30);

      p.addDay(sleepDay);
      p.addDay(sleepDay2);
      p.addDay(sleepDay3);
      p.addDay(sleepDay4);
      p.addDay(sleepDay5);
      p.addDay(sleepDay6);
      p.addDay(sleepDay7);
      p.addDay(sleepDay8);
      p.addDay(sleepDay9);
      p.addDay(sleepDay10);
      p.addDay(sleepDay11);
      p.addDay(sleepDay12);
      p.addDay(sleepDay13);
      p.addDay(sleepDay14);
      p.addDay(sleepDay15);
      p.addDay(sleepDay16);
      p.addDay(sleepDay17);
      p.addDay(sleepDay18);
      p.addDay(sleepDay19);
      p.addDay(sleepDay20);
      p.addDay(sleepDay21);
      p.addDay(sleepDay22);
      p.addDay(sleepDay23);
      p.addDay(sleepDay24);
      p.addDay(sleepDay25);
      p.addDay(sleepDay26);
      p.addDay(sleepDay27);
      p.addDay(sleepDay28);
      p.addDay(sleepDay29);
      p.addDay(sleepDay30);
      
      this.seeWeekView();
  }


}

