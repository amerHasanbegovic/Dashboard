import { Component, OnInit } from '@angular/core';
import { line_chart_colors } from 'src/app/shared/chart.colors';

const line_chart_sample_data: any[] = [
  { data: [12, 15, 19, 22, 56, 3], label: 'Sentiment Analysis' },
  { data: [33, 42, 99, 0, 2, 15], label: 'Image Recognition' },
  { data: [14, 16, 28, 39, 40, 65], label: 'Forecasting' },
];

const line_chart_sample_labels: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  lineChartData = line_chart_sample_data;
  lineChartLabels = line_chart_sample_labels;
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartColors = line_chart_colors;
  lineChartLegend = true;
  lineChartType = 'line';

  ngOnInit(): void {}
}
