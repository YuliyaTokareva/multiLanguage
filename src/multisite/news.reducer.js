import { NEWS_LIST_RECIEVED, SHOW_SPINNER } from './news.actions';

const initialState = {
  newsList: [],
  newsListPagination: [],

  isFetching: false
};

const coctailsReduser = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LIST_RECIEVED:
      return {
        ...state,
        newsList: action.payload.newsList,
        newsListPagination: [...state.newsList, ...action.payload.newsList],
        isFetching: false
      };
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true
      };
    }
    default:
      return state;
  }
};
export default coctailsReduser;
