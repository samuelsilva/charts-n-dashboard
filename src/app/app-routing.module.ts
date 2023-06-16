import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashComponent } from "./components/dash/dash.component";
import { RadarChartComponent } from "./components/charts/radar-chart/radar-chart.component";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";

const routes: Routes = [
    { path: 'dashboard', component: DashComponent },
    { path: 'Radar Chart', component: RadarChartComponent },
    { path: 'Line Chart', component: LineChartComponent },
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}