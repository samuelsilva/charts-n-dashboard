import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent {
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  /*
  public doughnutChartData: number[] = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
 */
  public doughnutChartData: ChartDataset[] = [
    {
      data: [350, 450, 100],
      label: 'Data Set 1'
    },
    {
      data: [50, 150, 120],
      label: 'Data Set 2'
    },
    {
      data: [250, 130, 70],
      label: 'Data Set 3'
    }
  ];
  
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }
  public chartData: ChartDataset<any>[] = this.doughnutChartData;

}
