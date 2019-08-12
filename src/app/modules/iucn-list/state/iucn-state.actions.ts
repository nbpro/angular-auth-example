import {Action} from '@ngrx/store';
export const GET_SPECIES_LIST = 'GET_SPECIES_LIST';
export const GET_SPECIES_LIST_SUCCESS = 'GET_SPECIES_LIST_SUCCESS';
export const GET_SPECIES_LIST_FAIL = 'GET_SPECIES_LIST_FAIL';


export class GetSpeciesList implements Action {
  readonly type = GET_SPECIES_LIST;
  constructor(public payload) {} // pass country Id as payload
}

export class GetSpeciesListSuccess implements Action {
  readonly type = GET_SPECIES_LIST_SUCCESS;
  constructor(public payload) {}
}

export class GetSpeciesListFail implements Action {
  readonly type = GET_SPECIES_LIST_FAIL;
  constructor(public payload) {}
}
export type SpeciesActionList = GetSpeciesList | GetSpeciesListSuccess | GetSpeciesListFail;
