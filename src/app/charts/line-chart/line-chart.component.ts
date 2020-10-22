import { Component, OnInit } from '@angular/core';
import { line_chart_colors } from 'src/app/shared/chart.colors';
import * as moment from 'moment';
import { SalesDataService } from 'src/app/services/sales-data.service';

// const line_chart_sample_data: any[] = [
//   { data: [12, 15, 19, 22, 56, 3], label: 'Sentiment Analysis' },
//   { data: [33, 42, 99, 0, 2, 15], label: 'Image Recognition' },
//   { data: [14, 16, 28, 39, 40, 65], label: 'Forecasting' },
// ];

// const line_chart_sample_labels: string[] = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
// ];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor(private _salesDataService: SalesDataService) {}

  topCustomers: string[];
  allOrders: any[];

  lineChartData: any;
  lineChartLabels: any;
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartColors = line_chart_colors;
  lineChartLegend = true;
  lineChartType = 'line';

  ngOnInit(): void {
    this._salesDataService.getOrders(1, 100).subscribe((res) => {
      this.allOrders = res['page']['data'];

      this._salesDataService.getOrdersByCustomer(3).subscribe((cus: any) => {
        this.topCustomers = cus.map((x: any) => x['name']);

        const allChartData = this.topCustomers.reduce((result, i) => {
          result.push(this.getChartData(this.allOrders, i));
          return result;
        }, []);

        let dates = allChartData
          .map((x) => x['data'])
          .reduce((a, i) => {
            a.push(i.map((o: any) => new Date(o[0])));
            return a;
          }, []);

        dates = [].concat.apply([], dates);

        const r = this.getCustomerOrdersByDate(allChartData, dates)['data'];
        console.log('r:', r);

        this.lineChartLabels = r[0]['orders'].map((o: any) => o['date']);

        this.lineChartData = [
          { data: r[0].orders.map((x: any) => x.total), label: r[0]['customer'] },
          { data: r[1].orders.map((x: any) => x.total), label: r[1]['customer'] },
          { data: r[2].orders.map((x: any) => x.total), label: r[2]['customer'] },
        ];
      });
    });
  }
  getChartData(allOrders: any, name: string) {
    const customerOrders = allOrders.filter(
      (o: any) => o.customer.name === name
    );
    // console.log('name:', name, 'customerOrders:', customerOrders);

    const formattedOrders = customerOrders.reduce((r: any, e: any) => {
      r.push([e.placed, e.total]);
      return r;
    }, []);

    // console.log('formattedOrders:', formattedOrders);
    const result = { customer: name, data: formattedOrders };

    // console.log('result:', result);
    return result;
  }

  getCustomerOrdersByDate(orders: any, dates: any) {
    // for each customer -> for each date =>
    // { data: [{'customer': 'XYZ', 'orders': [{ 'date': '17-11-25', total: 2421}, {}]}, {}, {}]}
    const customers = this.topCustomers;
    const prettyDates = dates.map((x: any) => this.toFriendlyDate(x));
    const u = Array.from(new Set(prettyDates)).sort();
    // console.log(u);

    // define our result object to return:
    const result = {};
    const dataSets = (result['data'] = []);

    customers.reduce((x, y, i) => {
      // console.log('Reducing:', y, 'at index:', i);
      const customerOrders = [];
      dataSets[i] = {
        customer: y,
        orders: u.reduce((r, e, j) => {
          const obj = {};
          obj['date'] = e;
          obj['total'] = this.getCustomerDateTotal(e, y); // sum total orders for this customer on this day
          customerOrders.push(obj);
          // console.log('Reducing:', e, 'at index:', j, 'customerOrders', customerOrders);
          return customerOrders;
        }),
      };
      return x;
    }, []);

    return result;
  }

  toFriendlyDate(date: Date) {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

  getCustomerDateTotal(date: any, customer: string) {
    const r = this.allOrders.filter(
      (o) =>
        o.customer.name === customer && this.toFriendlyDate(o.placed) === date
    );

    const result = r.reduce((a, b) => {
      return a + b.total;
    }, 0);

    return result;
  }
}
