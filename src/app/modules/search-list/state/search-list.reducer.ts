import * as searchAction from './search-list.action';

export function searchList(
  state,
  action: searchAction.SearchListActions
) {
  switch (action.type) {
    case searchAction.GET_SEARCH_LIST:
      return {
        ...state,
        status: 'STARTED',
        loading: true,
      };
    case searchAction.GET_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        data: action.payload,
      };
    case searchAction.GET_SEARCH_LIST_FAIL:
      return {
        ...state,
        status: 'FAILED',
        data: []
      };
    default:
      return state;
  }
}
