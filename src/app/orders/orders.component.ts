import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {Id:1, Customer:{Id: 1, Name: 'Bakery Inc.', Email: 'bakery@example.com', State: 'NY'}, Amount: 230, Placed: new Date(2020, 7, 2), Fulfilled: new Date(2020, 7, 7)},
    {Id:2, Customer:{Id: 1, Name: 'Bakery Inc.', Email: 'bakery@example.com', State: 'NY'}, Amount: 230, Placed: new Date(2020, 7, 2), Fulfilled: new Date(2020, 7, 7)},
    {Id:3, Customer:{Id: 1, Name: 'Bakery Inc.', Email: 'bakery@example.com', State: 'NY'}, Amount: 230, Placed: new Date(2020, 7, 2), Fulfilled: new Date(2020, 7, 7)},
    {Id:4, Customer:{Id: 1, Name: 'Bakery Inc.', Email: 'bakery@example.com', State: 'NY'}, Amount: 230, Placed: new Date(2020, 7, 2), Fulfilled: new Date(2020, 7, 7)},
    {Id:5, Customer:{Id: 1, Name: 'Bakery Inc.', Email: 'bakery@example.com', State: 'NY'}, Amount: 230, Placed: new Date(2020, 7, 2), Fulfilled: new Date(2020, 7, 7)},
  ]

  ngOnInit(): void {
  }

}
