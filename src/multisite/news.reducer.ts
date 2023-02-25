import { NEWS_LIST_RECIEVED, SHOW_SPINNER } from './news.actions';
import { ActionTypes, Actions, InitialState, State } from '../entities/Redux';
import type { NewsArticle } from '../entities/News';

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
        newsListPagination: [...state.newsList, ...action.payload.newsList],
        isFetching: false
      };
    case ActionTypes.SHOW_SPINNER: {
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
// import { NEWS_LIST_RECIEVED, SHOW_SPINNER } from './news.actions';

// const initialState = {
//   newsList: [],
//   newsListPagination: [],
//   isFetching: false
// };

// const coctailsReduser = (state = initialState, action) => {
//   switch (action.type) {
//     case NEWS_LIST_RECIEVED:
//       return {
//         ...state,
//         newsList: action.payload.newsList,
//         newsListPagination: [...state.newsList, ...action.payload.newsList],
//         isFetching: false
//       };
//     case SHOW_SPINNER: {
//       return {
//         ...state,
//         isFetching: true
//       };
//     }
//     default:
//       return state;
//   }
// };
// export default coctailsReduser;
