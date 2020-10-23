import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
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

  constructor() {}
  ngOnInit(): void {}

  OnPrev = () => {
    this.goPrevious.emit(true);
  };
  OnNext = () => {
    this.goNext.emit(true);
  };
  OnPage = (n: number) => {
    this.goPage.emit(n);
  };

  TotalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  IsLastPage(): boolean {
    return this.perPage * this.page >= this.count;
  }

  GetPages(): number[] {
    const totalPages = Math.ceil(this.count / this.perPage);
    const thisPage = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];

    pages.push(thisPage);

    for (let i = 0; i < pagesToShow - 1; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < totalPages) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }

  GetCurrentResultsCount = () => {
    let current = this.perPage * this.page;
    if (current > this.count) current = this.count;
    return current;
  };
}
