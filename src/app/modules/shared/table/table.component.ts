import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  headerData;
  constructor() { }

  ngOnInit() {
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
        columnDisplayName: 'Endangred Status',
      }
    ];
  }

}
