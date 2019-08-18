import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headerData;
  @Input() tableData;
  @Input() pageNumbers;
  /**
   *
   * table height/ width
   */
  columns: any;
  data: any;
  pageToData: any;
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

  private getTotalNumberOfPages() {
    const recordCount = this.tableData.length;
    const list = this.tableData;
    const pageSize = 10;
    const totalPageCount = recordCount / pageSize; // 10 is page size as of now, get this as part of configuration;
    let initialPointer: number = 0 ;
    let arrayFrom: number= 0;
    let toArray: number = 10;
    const pageWise = {};
    for(let i = 0 ; i < totalPageCount ; i++) {
      pageWise[initialPointer] = list.slice(arrayFrom, toArray);
      initialPointer = initialPointer + 1;
      arrayFrom = arrayFrom + pageSize;
      toArray = toArray + pageSize;
      // console.log(arrayFrom);
    }
    this.pageToData = pageWise;
    return Object.keys(pageWise);
  }

  public onPageChangeEvent(page) {
    this.data = this.pageToData[page];
  }
}
