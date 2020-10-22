import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;

  @Output() goPrevious = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() { }
  ngOnInit(): void {
  }

  OnPrev = () => {
    this.goPrevious.emit(true);
  }
  OnNext = () => {
    this.goNext.emit(true);
  }
  OnPage = (n: number) => {
    this.goPage.emit(n);
  }

  TotalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  IsLastPage() : boolean {
    return this.perPage*this.page >= this.count
  }
}
