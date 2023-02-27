import { ActionTypes, Actions, InitialState } from '../entities/Redux';

const initialState: InitialState = {
  newsList: [],
  newsListPagination: [],
  isFetching: false
};

const coctailsReduser = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case ActionTypes.NEWS_LIST_RECIEVED:
      return {
        ...state,
        newsList: action.payload.newsList,
        newsListPagination: [...state.newsListPagination, ...action.payload.newsList],
        isFetching: false
      };
    case ActionTypes.SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ActionTypes.NEWS_POST_DELETE: {
      return {
        ...state,
        newsListPagination: []
      };
    }
    default:
      return state;
  }
};
export default coctailsReduser;
