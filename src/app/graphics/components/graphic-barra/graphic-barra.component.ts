import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-barra',
  templateUrl: './graphic-barra.component.html',
  styleUrls: ['./graphic-barra.component.css'],
})
export class GraphicBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData!: ChartData<'bar'>

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions = {
       indexAxis: 'y',
      };
    }
  }

}
