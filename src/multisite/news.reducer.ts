import { ActionTypes, Actions, InitialState } from '../entities/Redux';

const initialState: InitialState = {
  newsList: [],
  newsListPagination: [],
  isFetching: false,
  authorization: null
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
    case ActionTypes.LOGIN: {
      return {
        ...state,
        authorization: true
      };
    }
    case ActionTypes.LOGOUT: {
      return {
        ...state,
        authorization: false
      };
    }
    default:
      return state;
  }
};
export default coctailsReduser;
