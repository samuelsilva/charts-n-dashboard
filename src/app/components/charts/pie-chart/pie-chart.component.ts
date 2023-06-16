import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: ChartDataset[] = [
    {  data: [300, 500, 100],  }
  ];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

   // Nova propriedade chartData para resolver o erro
   public chartData: ChartDataset<any>[] = this.pieChartData;

}
