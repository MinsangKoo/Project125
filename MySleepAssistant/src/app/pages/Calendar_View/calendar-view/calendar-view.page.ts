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
      
      let sleepDay = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,23,2023));
      let sleepDay2 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,24,2023));
      let sleepDay3 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,25,2023));
      let sleepDay4 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,26,2023));
      let sleepDay5 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,27,2023));
      let sleepDay6 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,28,2023));
      let sleepDay7 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,29,2023));
      let sleepDay8 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,30,2023));
      let sleepDay9 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(1,31,2023));
      let sleepDay10 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,1,2023));
      let sleepDay11 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,2,2023));
      let sleepDay12 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,3,2023));
      let sleepDay13 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,4,2023));
      let sleepDay14 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,5,2023));
      let sleepDay15 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,6,2023));
      let sleepDay16 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,7,2023));
      let sleepDay17 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,8,2023));
      let sleepDay18 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,9,2023));
      let sleepDay19 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,10,2023));
      let sleepDay20 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,11,2023));
      let sleepDay21 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,12,2023));
      let sleepDay22 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,13,2023));
      let sleepDay23 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,14,2023));
      let sleepDay24 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,15,2023));
      let sleepDay25 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,16,2023));
      let sleepDay26 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,17,2023));
      let sleepDay27 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,18,2023));
      let sleepDay28 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,19,2023));
      let sleepDay29 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,20,2023));
      let sleepDay30 = new sleep_day(0, 0, 0, 60, new time(9,0,'PM'), new time(9,0,'AM'), 0, new Date(2,21,2023));

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

