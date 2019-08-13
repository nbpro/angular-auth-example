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
        data: action.payload.result
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
