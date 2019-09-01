import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as searchActions from './state/search-list.action';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  dataToBeSearched: Array<object> = [];
  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new searchActions.GetSearchList());
    this.store.pipe(
      select(state => (state['search-list']['searchList'])),
      filter(state => (state.status === 'SUCCESS')))
      .subscribe((state) => {
        this.dataToBeSearched = state.data;
      });
  }
  public searchValue(event) {
    const query = event.currentTarget.value;
    const result = this.filterIt(this.dataToBeSearched , query);
    console.log(result);
  }

  private filterIt(arr, searchKey) {
    return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
  }
}
