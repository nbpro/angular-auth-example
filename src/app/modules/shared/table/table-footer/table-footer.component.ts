import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  @Input() NumberOfPages;
  @Output() pageNumberChange =  new EventEmitter();
  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
  }
  public onPageChange(pageNumber) {
    this.pageNumberChange.emit(pageNumber);
  }
}
