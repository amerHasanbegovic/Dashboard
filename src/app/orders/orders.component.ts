import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { SalesDataService } from '../services/sales-data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private _salesData: SalesDataService) {}

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders = () => {
    this._salesData.getOrders(this.page, this.limit)
    .subscribe(res => {
      console.log('results from GetOrders', res);
      this.orders = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    });
  };

  GoToPrevious = () => {
    this.page --; //if(page == 1) button is disabled
    this.getOrders()
  }
  GoToNext = () => {
    this.page++;
    this.getOrders();
  }

  GoToPage = (n: number) => {
    this.page = n;
    this.getOrders();
  }
}
