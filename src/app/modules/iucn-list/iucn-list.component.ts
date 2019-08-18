import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as IucnListActions from './state/iucn-state.actions';
import { filter } from 'minimatch';

@Component({
  selector: 'app-iucn-list',
  templateUrl: './iucn-list.component.html',
  styleUrls: ['./iucn-list.component.scss'],
})
export class IucnListComponent implements OnInit {
  iucnList: Array<object> = [];
  totalCount: number = 0;
  pageNumbers;
  headerColumns: Array<any> = [];
  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.setUpView();
  }
  async setUpView() { // use generator in next interations
    await this.getIUCNList();
    // await this.getColumns();
  }

  private getIUCNList() {
    this.store.dispatch(new IucnListActions.GetSpeciesList(`IN`));
    this.store.pipe(select(state => (state['icun-list']['speciesList'])),).subscribe(iucnList => {
      if (iucnList && iucnList.status === 'SUCCESS') { // change this in next iteration
        // this.iucnList = iucnList.data.slice(0, 10);
        this.iucnList = iucnList.data;
        this.totalCount = iucnList.count;
        this.pageNumbers = Object.keys(iucnList.pageWiseData);
        this.getColumns();
      }
    });
  }
  private getColumns() {
    const [firstElement] = this.iucnList;
    this.headerColumns = Object.keys(firstElement);
  }
}
