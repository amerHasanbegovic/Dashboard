import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SalesDataService {
  constructor(private _http: HttpClient) {}

  getOrders = (pageNum: number, pageSize: number) => {
    return this._http
      .get('http://localhost:5000/api/order/' + pageNum + '/' + pageSize)
      .pipe(
        map(
          (res: any) => res.json(),
          catchError((err) => err.Message())
        )
      );
  };

  getOrdersByCustomer = (n: number) => {
    return this._http
      .get('http://localhost:5000/api/order/bycustomer/' + n)
      .pipe(
        map((res: any) => res.json()),
        catchError((err) => err.Message())
      );
  };

  getOrdersByState = () => {
    return this._http.get('http://localhost:5000/api/order/bystate/').pipe(
      map((res: any) => res.json()),
      catchError((err) => err.Message())
    );
  };
}
