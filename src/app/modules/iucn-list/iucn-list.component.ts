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
  headerColumns: Array<any> = [];
  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.setUpView();
  }
  private setUpView(): void {
    this.store.dispatch(new IucnListActions.GetSpeciesList(`IN`));
    this.store.pipe(select(state => (state['icun-list']['speciesList'])),).subscribe(iucnList => {
      if (iucnList && iucnList.status === 'SUCCESS') {
        this.iucnList = iucnList.data;
        this.totalCount = iucnList.count;
        this.getColumns();
      }
    });
  }
  private getColumns() {
    console.log(this.iucnList);
    const [firstElement] = this.iucnList;
    this.headerColumns = Object.keys(firstElement);
  }
}
