import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages
  @Input() actualPage
  @Output() moveToPage = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  moveToPageEmitter(page) {
    this.moveToPage.emit(page)
  }

}
