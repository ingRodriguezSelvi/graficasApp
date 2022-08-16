import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-barra',
  templateUrl: './graphic-barra.component.html',
  styleUrls: ['./graphic-barra.component.css']
})
export class GraphicBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#FFC107', hoverBackgroundColor: 'blue' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#03A9F4', hoverBackgroundColor: 'blue' },
      { data: [ 32, 12, 65, 76, 64, 43, 32 ], label: 'Series C', backgroundColor: '#4CAF50', hoverBackgroundColor: 'blue' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100) ];

   this.barChartData.datasets[1].data = [
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100) ];

     this.barChartData.datasets[2].data = [
       Math.round(Math.random() * 100),
       Math.round(Math.random() * 100),
       Math.round(Math.random() * 100),
       Math.round(Math.random() * 100),
       Math.round(Math.random() * 100),
       Math.round(Math.random() * 100),
       Math.round(Math.random() * 100) ];

   this.chart?.update();
 }

}
