import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as IucnListActions from './state/iucn-state.actions';

@Component({
  selector: 'app-iucn-list',
  templateUrl: './iucn-list.component.html',
  styleUrls: ['./iucn-list.component.scss'],
})
export class IucnListComponent implements OnInit {

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new IucnListActions.GetSpeciesList(`IN`));
  }
}
