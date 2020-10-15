import { Component, OnInit } from '@angular/core';

const sampleBarChart: any[] = [
  { data: [123, 29, 23, 178, 67], label: 'Fall sales' },
  { data: [17, 12, 22, 76, 123], label: 'Winter sales' },
];
const sampleBarChartLabels: string[] = ['W1', 'W2', 'W3', 'W4'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  public barChartData: any[] = sampleBarChart;
  public barChartLabels: string[] = sampleBarChartLabels;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  ngOnInit(): void {}
}
