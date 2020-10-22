import { Component, OnInit } from '@angular/core';
import { SalesDataService } from 'src/app/services/sales-data.service';
import * as moment from 'moment';

// const sampleBarChart: any[] = [
//   { data: [123, 29, 23, 178, 67], label: 'Fall sales' },
//   { data: [17, 12, 22, 76, 123], label: 'Winter sales' },
// ];
// const sampleBarChartLabels: string[] = ['W1', 'W2', 'W3', 'W4'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor(private _salesDataService: SalesDataService) {}

  orders: any[];
  oderLabels: string[];
  orderData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  ngOnInit(): void {
    this._salesDataService.getOrders(1, 100).subscribe((res: any) => {
      const localChartData = this.GetChartData(res);
      this.barChartLabels = localChartData.map((x: any) => x[0]).reverse();
      this.barChartData = [
        { data: localChartData.map((x: any) => x[1]), label: 'Sales' },
      ];
    });
  }

  GetChartData = (res: Response) => {
    this.orders = res['page']['data'];
    const data = this.orders.map((o) => o.total);

    const formattedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);

    const p = [];

    const chartData = formattedOrders.reduce((r: any, e: any) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;
  };
}
