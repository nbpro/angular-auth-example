import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef,  } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as searchActions from './state/search-list.action';
import { filter, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { FormControl, FormBuilder } from '@angular/forms';
import { ComponentFactoryResolver } from '@angular/core';
import { ScrollIntoViewComponent } from './scroll-into-view/scroll-into-view.component';
import { Subject, Observable, observable, of } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  dataToBeSearched: Array<object> = [];
  result;
  searchForm;
  loading: boolean = false;
  @ViewChild('scrollListContainer', { read: ViewContainerRef }) listContainer;
  componentRef: ComponentRef<any>;
  // searchTerm$ = new Subject<string>();
  searchChangeObserver;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private cfr: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: new FormControl('')
    });
    this.store.dispatch(new searchActions.GetSearchList());
    this.store.pipe(
      select(state => (state['search-list']['searchList'])),
      filter(state => (state.status === 'SUCCESS')))
      .subscribe((state) => {
        this.dataToBeSearched = state.data;
    });
  }
  public searchValue($event) {
    this.loading = true;
    if (!this.searchChangeObserver) {
      Observable.create(observer => {
        this.searchChangeObserver = observer;
      }).pipe(debounceTime(300)) // wait 300ms after the last event before emitting last event
        .pipe(distinctUntilChanged()) // only emit if value is different from previous value
        .subscribe(() =>
          this.getData()
        );
    }
    this.searchChangeObserver.next(this.searchForm.value.search);
  }
  getData() {
    const query = this.searchForm.value.search;
    this.result = this.filterIt(this.dataToBeSearched , query); // TODO: wrap it inside memomised function
    this.openScrollView();
  }

  openScrollView() {
    this.listContainer.clear();
    const factory = this.cfr.resolveComponentFactory(ScrollIntoViewComponent);
    this.componentRef = this.listContainer.createComponent(factory);
    this.componentRef.instance.scrollList = this.result;
    this.loading = false;
  }

  private filterIt(arr, searchKey) {
    // return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
    const results: Array<any> = [];
        for (let i = 0; i < arr.length; i++) {
            for (const key in arr[i]) {
                if (arr[i][key] != null && typeof(arr[i][key] ) !== 'boolean' && typeof(arr[i][key] ) !== 'number') {
                    if (Array.isArray(arr[i][key])) {
                      if (this.checkSearchValueInChild(arr[i][key], searchKey)) {
                        results.push(arr[i]);
                      }
                    }else if (arr[i][key].includes(searchKey)) { //TODO: case insenstive match need to added
                        results.push(arr[i]);
                    }
                }
            }
        }

    return results;
  }
  private checkSearchValueInChild(arr, searchKey) {
    let searchFounded = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(searchKey)) {
        searchFounded = true;
        break;
      }
    }
    return searchFounded;
  }
}
