import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';

 // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'>= {
    labels: [],
    datasets: [],
  };


  /*   */

  constructor( private grpahicsServices: GraphicsService ) { }

  ngOnInit(): void {

      this.grpahicsServices.getUserSocialMedia2()
      .subscribe( res  =>{
        this.doughnutChartData ={
          labels: res.label,
          datasets: [
            {
              data: res.data,
            }
          ]
      }});
  }

}
