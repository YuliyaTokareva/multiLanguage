import { COCTAILS_LIST_RECIEVED } from './coctails.actions';

const initialState = {
  coctailsList: [],
  coctailsPagination: [],

  isFetching: false
};

const coctailsReduser = (state = initialState, action) => {
  switch (action.type) {
    case COCTAILS_LIST_RECIEVED:
      return {
        ...state,
        coctailsList: action.payload.coctailsList,
        coctailsPagination: [...state.coctailsList, ...action.payload.coctailsList],
        isFetching: false
      };

    default:
      return state;
  }
};
export default coctailsReduser;
