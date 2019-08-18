import * as IucnActionList from "./iucn-state.actions";

export interface IEndangeredSpecies {
  taxonid?: number;
  scientific_name?: string;
  subspecies?: string;
  rank?: string;
  category?: string;
}
export interface IUCNDefaultState {
  status?: string;
  message?: string;
  loading?: boolean;
  count?: number;
  data?: IEndangeredSpecies;
}
export const defaultState = {
  status: 'NONE',
  message: 'Fectching list of species',
  loading: false,
  count: 0,
  data: []
};

export function speciesList(
  state = defaultState,
  action: IucnActionList.SpeciesActionList
) {
  switch (action.type) {
    case IucnActionList.GET_SPECIES_LIST:
      return {
        ...state,
        status: 'STARTED',
        loading: true,
      };
    case IucnActionList.GET_SPECIES_LIST_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        count: action.payload.count,
        data: action.payload.result,
        pageWiseData: arrangeDataPageWise(action.payload)
      };
    case IucnActionList.GET_SPECIES_LIST_FAIL:
      return {
        ...state,
        status: 'FAILED',
        count: 0,
        data: []
      };
    default:
      return state;
  }
}

function arrangeDataPageWise(data) {
  const recordCount = data.count;
  const list = data.result;
  const pageSize = 10;
  const totalPageCount = recordCount / pageSize; // 10 is page size as of now, get this as part of configuration;
  let initialPointer: number = 0 ;
  let arrayFrom: number= 0;
  let toArray: number = 10;
  const pageWise = {};
  for(let i = 0 ; i < totalPageCount ; i++) {
    pageWise[initialPointer] = list.slice(arrayFrom, toArray);
    initialPointer = initialPointer + 1;
    arrayFrom = arrayFrom + pageSize;
    toArray = toArray + pageSize;
    // console.log(arrayFrom);
  }
  return pageWise;
}
