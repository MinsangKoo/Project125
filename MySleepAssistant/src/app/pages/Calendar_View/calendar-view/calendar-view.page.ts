import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ScatterController, LinearScale, PointElement, LineController, CategoryScale, LineElement } from 'chart.js';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.page.html',
  styleUrls: ['./calendar-view.page.scss'],
})
export class CalendarViewPage implements OnInit {

  public chart: any;
  public weekChart: any;
  public monthChart: any;
 
  constructor(private activatedRoute: ActivatedRoute) { }


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
    const weekLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const weekData = {
      labels: weekLabels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
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

      this.seeWeekView();

      // const monthLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      // const monthData = {
      //   labels: monthLabels,
      //   datasets: [{
      //     label: 'My First Dataset',
      //     data: [100, 100, 80, 100, 100, 100, 100],
      //     fill: false,
      //     borderColor: 'rgb(75, 192, 192)',
      //     tension: 0.1
      //   }]
      // };

      // Chart.register(ScatterController, LinearScale, LineController, CategoryScale, LineElement, PointElement);
      // this.monthChart = new Chart("chart1", {
      //   type: "line",
      //   data: weekData,
      //   options: {}
      //   });

  }


}

