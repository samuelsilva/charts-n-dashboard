import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashComponent } from "./components/dash/dash.component";
import { RadarChartComponent } from "./components/charts/radar-chart/radar-chart.component";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";
import { PieChartComponent } from "./components/charts/pie-chart/pie-chart.component";
import { BarChartComponent } from "./components/charts/bar-chart/bar-chart.component";
import { DonutChartComponent } from "./components/charts/donut-chart/donut-chart.component";

const routes: Routes = [
    { path: 'dashboard', component: DashComponent },
    { path: 'Radar Chart', component: RadarChartComponent },
    { path: 'Line Chart', component: LineChartComponent },
    { path: 'Pie Chart', component: PieChartComponent },
    { path: 'Bar Chart', component: BarChartComponent },    
    { path: 'Donut Chart', component: DonutChartComponent },
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}