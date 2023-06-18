# CHARTS N DASHBOARD

I was doing a project for my work and I needed to create charts and integrate database, charts and all in a dashboard. At beginning I decided to use ApexCharts, but I had a lot of problems and change from Apex to Charts.js/ng2-charts. So, I have another problems, but now I solve them.

<br />

| [ARCHITECTURE](#1-architecture) | [DEVELOPMENT ENVIRONMENT](#2-development-environment) | [FIXING THE ERRORS](#3-fixing-the-errors) | [LICENSE](#4-license) | [CONTACT](#5-contact) |

<br />

<br />

## **1. ARCHITECTURE**
### **1.1. Tecnologias utilizadas**
- <img align="center" alt="Angular" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" /> Angular (Frontend)
- <img align="center" alt="Material" height="30" width="40" src="https://material.angular.io/assets/img/angular-material-logo.svg" /> Angular Material (Frontend)
- <img align="center" alt="ChartJS" height="30" width="40" src="https://www.chartjs.org/img/chartjs-logo.svg" /> Chart.js and Ng2-charts (Frontend)
<br />

### **1.2. Important Links**
- [Angular Material](https://material.angular.io/)
- [Chart.js](https://www.chartjs.org/)
- [Ng2-Charts](https://www.npmjs.com/package/ng2-charts)

### **1.3. Content Links**
I used some links to understand ng2-charts:
- [Create A Responsive Dashboard With Angular Material And ng2-Charts](https://www.smashingmagazine.com/2020/07/responsive-dashboard-angular-material-ng2-charts-schematics/)
- [How to use Chart.js your Angular 13+ project](https://dev.to/chadwinjdeysel/how-to-use-chartjs-your-angular-13-project-1ccc)
- [Angular 13 Chart Js Tutorial with ng2-charts Examples](https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/)
- [Awesome Charts in Angular 13 with ng2-charts](https://www.ngdevelop.tech/angular-ng2-charts-develop-awesome-charts-in-angular-13/)
- [angular: unable to use ng2-charts-schematics and @ngrx/* schematics with workspace.json v2](https://github.com/nrwl/nx/issues/4365)
- [On angular 13 the generate command doesn't allow generating new cart components](https://github.com/valor-software/ng2-charts/issues/1373)

After trying to use them, I still have problems but now I fix them, so I show you how to fix them in this experimental program/code/whatever you call this.


<br />


## **2. DEVELOPMENT ENVIRONMENT**
```
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
```

<br />

### **2.1. Basic requirements**
Requirements and tools needed to run the system.

- NPM
- Angular
- Angular Material
- Chart.js
- Ng2-charts

<br />

### **2.2. Installation**
I believe you installed node and angular already, so I will show you the next steps:

#### 1. Create your project 
  ```ng new my-chart-project```

#### 2. Install Angular Material, Angular CDK and Angular Animations
```npm install @angular/material @angular/cdk @angular/animations```

Sometimes you will have trouble with this, so you need to put the correct version of libraries:
<br />
```npm install @angular/material@<version you need here>```
<br />
Don't forget to add this to your project, and the best (and fast) way is the commmand line:
<br />
```ng add @angular/material```

#### 3. Install Ng2-Charts
```npm install ng2-charts```

I have trouble using "--save", when I try to use this the installation didn't work, so I don't use this until now, but if you can... 
<br />
```npm install ng2-charts --save```
<br />
Install chart.js is important too
<br />
```npm install chart.js```

#### 4. Don't forget to add the ChartsModule to the AppModule's import!
But it's not ChartsModule anymore you have to use, you will need to use NgChartsModule, so the line at the app.module.ts will be
```import { NgChartsModule } from 'ng2-charts';```

#### 5.  Ng2-charts-schematics or just Ng2-charts?
When follow one of the tutorial links above I try to install this schematics, but it was deprecated, so don't use this!
The previous command lines was:
<br />
```ng generate ng2-charts-schematics:<chart type> <chart name>```
<br />
But now you can use this to generate your charts:
<br />
```ng generate ng2-charts:<chart type> <chart name>```
<br />
Be like:
<br /> 
```
ng generate ng2-charts:line charts/line-chart

ng generate ng2-charts:radar charts/radar-chart
```

#### 6. Navigation Component
Well, you can use the navigation you wanted, bootstrap or any other thing you want. For this, I use the navigation provided for Angular Material. A schematic to generates a navigation component always is a good option.

```ng generate @angular/material:navigation nav```

I won't explain about routes and all this stuff here. Exist a lot of material about this on internet, so enjoy your search, but all this are in my code, so you can use this like a guide if you want.
TIP: create a route for every chart component you made, just for see them running and test them before attach to a dashboard. 

#### 7. DASHBOARD Component
Like the navigation I use the dashboard from Angular Material schematics. First the structure of the schematics from Angular Material.

```
ng generate @angular/material:<angular type> <your component name>

ng generate @angular/material:dashboard dash
```

How I said before, I won't explain routes, but I will show you a simple code for app-routing.module.ts, so enjoy it. It's from one of the links I put above

```
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
```

I will show you how to attach the charts to dashboard, but now we will focus on charts.

#### 8. How to use CHARTS after I created them with schematics?
Well, after created them you'll see a lot a errors... The initial errors exist because the schematics don't import all the dependencies for your code. Let's correct them:

```import { ChartOptions, ChartType, ChartDataset } from 'chart.js';```

You'll probably see some errors vanish, but not them all. You will see 3 errors remains at ts code. This errors are related to: Label, ChartDataSetsLine and Color. And 1 error in html code, related to field data.

But before this, the initial code created for line-chart

```
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
```

## 9. Fixing the errors
> __Cannot find name 'Label'__

```Label is just a string array, so change Label[] for string[].```

> __Cannot find name 'ChartDataSetsLine'__

```If you take a look, ChartDataSetsLine it's note the import we have in the line import I said before, but ChartDataset is... so, just change ChartDataSetsLine for ChartDataset.```

> __Fix the "Color"__

```If you remove the colors option in your code, the colors will be chosen randomly, but if you insist to fix them, the solution will be "a little" diferent.```

```Instead of using the propriety color at html, we will use the ChartDataset. ```

WHAT?

```Yes, we'll move the background-colors and etc to inside of the ChartDataset. Before we had this:```

```
public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
```

```And now lineChartColors: Color[] won't exist anymore, just lineChartData: ChartDataset like this:```
```
  public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], 
      label: 'Series A' ,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
```

```For me it isn't the most beautiful way to code, but it works!```

> __Fix the "field data"__

```Just change data for datasets in html code and this will run. The line will change from this```
```
[data]="lineChartData"
```
```to this```
```
[datasets]="lineChartData"
```

<br />
<br />

## **4. LICENSE**
This project is licensed with [CC0 1.0 Universal](LICENSE.md)

Creative Commons License - See the file [LICENSE.md](LICENSE.md) for details.

<br />

<br />

## **5. CONTACT**
| Name | E-mail | Country |
| ---- | ------ | -------- | 
| Samuel Dario da Silva | samucasilva@gmail.com | Brazil