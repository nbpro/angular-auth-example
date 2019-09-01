import {Action} from '@ngrx/store';


export const GET_SEARCH_LIST = 'GET_SEARCH_LIST';
export const GET_SEARCH_LIST_SUCCESS = 'GET_SEARCH_LIST_SUCCESS';
export const GET_SEARCH_LIST_FAIL = 'GET_SEARCH_LIST_FAIL';



export class GetSearchList implements Action {
  readonly type = GET_SEARCH_LIST;
  constructor() {}
}

export class GetSearchListSuccess implements Action {
  readonly type = GET_SEARCH_LIST_SUCCESS;
  constructor(public payload) {}
}

export class GetSearchListFail implements Action {
  readonly type = GET_SEARCH_LIST_FAIL;
  constructor(public payload) {}
}


export type SearchListActions = GetSearchList |GetSearchListSuccess | GetSearchListFail;
