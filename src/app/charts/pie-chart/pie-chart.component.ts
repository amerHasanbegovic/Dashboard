import { Component, OnInit, Input } from '@angular/core';
import { THEME_COLORS } from '../../shared/theme.colors';
import _ from 'lodash';

const theme = 'Bright';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  // pieChartData: number[] = [240, 170, 345];
  // pieChartLabels: string[] = ['XY Logistics', 'Bakery Inc.', 'Engine Inc'];
  // colors: any[] = [
  //   { backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
  //     borderColor: '#111'
  //  }
  // ];
  // pieChartType = 'doughnut';

  @Input() inputData: any;
  @Input() limit: number;

  pieChartData: number[];
  pieChartLabels: string[];
  colors: any[] = [
    {
      backgroundColor: this.themeColors(theme),
      borderColor: '#111',
    },
  ];
  pieChartType = 'doughnut';

  ngOnInit(): void {
    this.ParseChartData(this.inputData, this.limit);
  }

  ParseChartData(inputData: any, limit?: number) {
    const allData = inputData.slice(0, limit);
    console.log(allData);
    this.pieChartData = allData.map((x: any) => _.values(x)[1]);
    this.pieChartLabels = allData.map((x: any) => _.values(x)[0]);
  }

  themeColors(setName: string): string[] {
    const c = THEME_COLORS.slice(0).find((set) => set.name === setName)
      .colorSet;
    return c;
  }
}
