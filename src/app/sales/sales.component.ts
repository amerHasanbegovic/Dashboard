import { Component, OnInit, Input } from '@angular/core';
import { SalesDataService } from '../services/sales-data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})

export class SalesComponent implements OnInit {
  @Input() salesDataByCustomer: any;
  @Input() salesDataByState: any;

  constructor(private _salesDataService: SalesDataService) {}

  ngOnInit(): void {
    this._salesDataService.getOrdersByState().subscribe((res) => {
      this.salesDataByState = res;
    });
    this._salesDataService.getOrdersByCustomer(5).subscribe((res) => {
      this.salesDataByCustomer = res;
    });
  }
}
