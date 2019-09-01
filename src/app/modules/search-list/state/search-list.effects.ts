import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as SearchAction from './search-list.action';
type ALL = Observable<any>;

@Injectable()
export class SearchListEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  @Effect()
  getSearchList: ALL = this.actions$.pipe(
    ofType(SearchAction.GET_SEARCH_LIST),
    map((action: any) => action.payload),
      switchMap(() => {
        return this.http.get(`http://www.mocky.io/v2/5ba8efb23100007200c2750c`).pipe(
            map(response => {
              return (new SearchAction.GetSearchListSuccess(response));
            }),
          );
      }),
      catchError(err => of(new SearchAction.GetSearchListFail(err)))
  );
}
