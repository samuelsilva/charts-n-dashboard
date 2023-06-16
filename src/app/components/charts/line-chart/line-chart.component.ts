import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartData: ChartDataset[] = [
    { 
      data: [65, 59, 80, 81, 56, 55, 40], 
      label: 'Series A - ' ,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  /*
  public lineChartColors: Array<any> = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  */

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

    // Nova propriedade chartData para resolver o erro
    public chartData: ChartDataset<any>[] = this.lineChartData;

}
