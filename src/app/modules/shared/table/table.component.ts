import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headerData;
  @Input() tableData;
  /**
   *
   * table height/ width
   */
  columns: any;
  data: any;
  constructor() { }

  ngOnInit() {
    this.constructHeaderColumns();
    this.constructTableData();
  }
  private constructHeaderColumns(): void {
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
  private constructTableData(): void {
    this.data = this.tableData.map((item) => ({
      taxonid: item.taxonid,
      scientific_name: item.scientific_name,
      subspecies: item.subspecies,
      rank: item.rank,
      subpopulation: item.subpopulation,
      category: item.category,
    }));
  }
}
