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
  data?: IEndangeredSpecies;
}
export const defaultState = {
  status: 'NONE',
  message: 'Fectching list of species',
  loading: false,
  data: []
};

export function speciesList(
  state = defaultState,
  action: IucnActionList.SpeciesActionList
) {
  switch (action.type) {
    case IucnActionList.GET_SPECIES_LIST:
      return {
        ...state
      };
    case IucnActionList.GET_SPECIES_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case IucnActionList.GET_SPECIES_LIST_FAIL:
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
}
