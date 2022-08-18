import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras-double',
  templateUrl: './barras-double.component.html',
  styleUrls: ['./barras-double.component.css']
})
export class BarrasDoubleComponent  {


  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  }

  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 200, 300,400,300, 100 ], label: 'Vendedor A',backgroundColor: 'blue' },
    ]
  }



  /*  */
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#FFC107', hoverBackgroundColor: 'blue' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#03A9F4', hoverBackgroundColor: 'blue' },
      { data: [ 32, 12, 65, 76, 64, 43, 32 ], label: 'Series C', backgroundColor: '#4CAF50', hoverBackgroundColor: 'blue' }
    ]
  };

}
