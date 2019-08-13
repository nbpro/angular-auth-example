import { Component, OnInit, Input } from '@angular/core';
export interface IColumnConfig {
  searchAllowed?: boolean;
  filterAllowed?: boolean;
  columnName?: string;
  columnDisplayName?: string;
}
export interface IHeaderConfiguration {
  columns: Array<IColumnConfig>;
}

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  @Input() HeaderConfiguration: IHeaderConfiguration;

  columns;
  constructor() { }

  ngOnInit() {
    this.columns = this.HeaderConfiguration;
  }

}
