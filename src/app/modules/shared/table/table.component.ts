import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headerData;
  columns;
  constructor() { }

  ngOnInit() {
    this.constructHeaderColumns();
    this.headerData = [ // all the headers should be dynamically generated
      {
        searchAllowed: true,
        filterAllowed: true,
        columnName: 'label',
        columnDisplayName: 'Display Name',
      },
      {
        searchAllowed: true,
        filterAllowed: true,
        columnName: 'iucnId',
        columnDisplayName: 'Species Id',
      },
      {
        searchAllowed: true,
        filterAllowed: true,
        columnName: 'status',
        columnDisplayName: 'Endangered Status',
      }
    ];
  }
  private constructHeaderColumns() {
    const transformData = (string) => {
      return string.replace(/(?:_| |\b)(\w)/g, function($1){return $1.toUpperCase().replace('_',' ');});
    };
    this.columns = this.headerData.map((col) => {
      return {
        searchAllowed : true,
        filterAllowed: true,
        columnName: col,
        columnDisplayName: transformData(col),
      };
    });
  }

}
