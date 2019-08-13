import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as IucnListActions from './iucn-state.actions';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
type ALL = Observable<any>;

@Injectable()
export class IUCNEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  @Effect()
  getEndangeredSpecies: ALL = this.actions$.pipe(
    ofType(IucnListActions.GET_SPECIES_LIST),
    map((action: any) => action.payload),
      switchMap((request: any) => {
        return this.http.get(
          `http://apiv3.iucnredlist.org/api/v3/country/
          getspecies/IN?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee`).pipe(
            map(response => {
              return (new IucnListActions.GetSpeciesListSuccess(response['result']));
            }),
          );
      }),
      catchError(err => of(new IucnListActions.GetSpeciesListFail(err)))
  );
}
