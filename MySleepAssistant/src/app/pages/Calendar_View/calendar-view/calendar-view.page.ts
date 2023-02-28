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
      weekLabels[i] = p.getDay(i).getDate().printDate();
    }

    // Get the last 7 days' sleep scores to use as y labels
    for (let i = 6; i >= 0; i--) {
      dataLabels[i] = p.getDay(i).getSleepscore();
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
      options: {}
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
    const monthLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const monthData = {
      labels: monthLabels,
      datasets: [{
        label: 'My First Dataset',
        data: [100, 100, 80, 81, 56, 100, 100],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    Chart.register(ScatterController, LinearScale, LineController, CategoryScale, LineElement, PointElement);
    this.monthChart = new Chart("chart", {
      type: "line",
      data: monthData,
      options: {}
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

      calculate_sleepscore(p, sleepDay);
      calculate_sleepscore(p, sleepDay2);
      calculate_sleepscore(p, sleepDay3);
      calculate_sleepscore(p, sleepDay4);
      calculate_sleepscore(p, sleepDay5);
      calculate_sleepscore(p, sleepDay6);
      calculate_sleepscore(p, sleepDay7);

      p.addDay(sleepDay);
      p.addDay(sleepDay2);
      p.addDay(sleepDay3);
      p.addDay(sleepDay4);
      p.addDay(sleepDay5);
      p.addDay(sleepDay6);
      p.addDay(sleepDay7);
      
      this.seeWeekView();
  }


}

