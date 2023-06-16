# DashboardCharts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# About this project
I was doing a project for my work and I needed to create charts and integrate database, charts and all in a dashboard. At beginning I decided to use ApexCharts, but I had a lot of problems and change from Apex to Charts.js/ng2-charts. So, I have another problems, but now I solve them.

## The NODE/ANGULAR ENVIRONMENT from this project
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 15.2.7
Node: 18.16.0
Package Manager: npm 9.6.5
OS: win32 x64

Angular: 15.2.9
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.8
@angular-devkit/build-angular   15.2.8
@angular-devkit/core            15.2.8
@angular-devkit/schematics      15.2.8
@angular/cli                    15.2.8
@schematics/angular             15.2.8
rxjs                            7.8.1
typescript                      4.9.5

## IMPORTANT NOTES
I used some links like my base to understand ng2-charts:
https://www.smashingmagazine.com/2020/07/responsive-dashboard-angular-material-ng2-charts-schematics/
https://dev.to/chadwinjdeysel/how-to-use-chartjs-your-angular-13-project-1ccc
https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/
https://www.ngdevelop.tech/angular-ng2-charts-develop-awesome-charts-in-angular-13/
https://github.com/nrwl/nx/issues/4365
https://github.com/valor-software/ng2-charts/issues/1373

After trying to use them, I still have problems but now I fix them, so I show you how to fix them in this experimental program/code/whatever you call this.

## FIRST THINGS FIRST
I believe you installed node and angular already, so I will show you the next steps:

1. Create your project 
ng new my-chart-project

2. Install Angular Material, Angular CDK and Angular Animations
npm install @angular/material @angular/cdk @angular/animations

Sometimes you will have trouble with this, so you need to put the correct version of libraries:
npm install @angular/material@<version you need here>

Don't forget to add this to your project, and the best (and fast) way is the commmand line:
ng add @angular/material

3. Install Ng2-Charts
npm install ng2-charts

I have trouble using "--save", when I try to use this the installation didn't work, so I don't use this until now, but if you can... 
npm install ng2-charts --save

Install chart.js is important too
npm install chart.js

4. Don't forget to add the ChartsModule to the AppModule's import!
But it's not ChartsModule anymore you have to use, you will need to use NgChartsModule, so the line at the app.module.ts will be
import { NgChartsModule } from 'ng2-charts';

5.  Ng2-charts-schematics
When follow one of the tutorial links above I try to install this schematics, but it was deprecated, so don't use this!
The previous command lines was:
ng generate ng2-charts-schematics:<chart type> <chart name>

But now you can use this to generate your charts:
ng generate ng2-charts:<chart type> <chart name>
Be like: 
ng generate ng2-charts:line charts/line-chart
ng generate ng2-charts:radar charts/radar-chart

6. Navigation Component
Well, you can use the navigation you wanted, bootstrap or any other thing you want. For this, I use the navigation provided for Angular Material. A schematic to generates a navigation component always is a good option.

ng generate @angular/material:navigation nav

I won't explain about routes and all this stuff here. Exist a lot of material about this on internet, so enjoy your search, but all this are in my code, so you can use this like a guide if you want.
TIP: create a route for every chart component you made, just for see them running and test them before attach to a dashboard. 

7. DASHBOARD Component
Like the navigation I use the dashboard from Angular Material schematics. First the structure of the schematics from Angular Material.
ng generate @angular/material:<angular type> <your component name>

ng generate @angular/material:dashboard dash

How I said before, I won't explain routes, but I will show you a simple code for app-routing.module.ts, so enjoy it. It's from one of the links I put above

// app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashComponent } from './dash/dash.component';

const routes: Routes = [{ path: 'dashboard', component: DashComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

I will show you how to attach the charts to dashboard, but now we will focus on charts.

8. How to use CHARTS after I created them with schematics?
Well, after created them you'll see a lot a errors... The initial errors exist because the schematics don't import all the dependencies for your code. Let's correct them:

import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

You'll probably see some errors vanish, but not them all. You will see 3 errors remains at ts code. This errors are related to: Label, ChartDataSetsLine and Color.
And 1 error in html code, related to field data.

But before this, the initial code created for line-chart

import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartData: ChartDataSetsLine[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }
}


-> Fix the "Label"
Label is just a string array, so change Label[] for string[].

-> Fix the "ChartDataSetsLine"
If you take a look, ChartDataSetsLine it's note the import we have in the line import I said before, but ChartDataset is... so, just change ChartDataSetsLine for ChartDataset.

-> Fix the "Color"
If you remove the colors option in your code, the colors will be chosen randomly, but if you insist to fix them, the solution will be "a little" diferent.
Instead of using the propriety color at html, we will use the ChartDataset. 
WHAT?
Yes, we'll move the background-colors and etc to inside of the ChartDataset. Before we had this:
public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

And now lineChartColors: Color[] won't exist anymore, just lineChartData: ChartDataset like this:
  public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], 
      label: 'Series A' ,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

For me it isn't the most beautiful way to code, but it works!

-> Fix the "field data"
Just change data for datasets in html code and this will run
The line will change from this
[data]="lineChartData"
to this
[datasets]="lineChartData"