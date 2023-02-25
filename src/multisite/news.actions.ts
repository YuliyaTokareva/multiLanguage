import { fetchNews } from './dataGateway';
import { Dispatch } from 'redux';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const NEWS_LIST_RECIEVED = 'NEWS_LIST_RECIEVED';
import type { NewsArticle } from '@entities/News';
import { ActionTypes } from '../entities/Redux';

export const showSpinner = () => ({
  type: ActionTypes.SHOW_SPINNER
});

export const fetchNewsListRecieved = (newsList: NewsArticle[]) => {
  const action = {
    type: ActionTypes.NEWS_LIST_RECIEVED,
    payload: {
      newsList
    }
  };
  return action;
};

export const getNewsList = (urlName: String) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch: Dispatch) {
    dispatch(showSpinner());
    fetchNews(urlName).then((newsList) => dispatch(fetchNewsListRecieved(newsList)));
  };
  return thunkAction;
};

// import { fetchNews } from './dataGateway';
// export const SHOW_SPINNER = 'SHOW_SPINNER';
// export const NEWS_LIST_RECIEVED = 'NEWS_LIST_RECIEVED';

// export const showSpinner = () => ({
//   type: SHOW_SPINNER
// });
// export const fetchCandidatesListRecieved = (newsList) => {
//   const action = {
//     type: NEWS_LIST_RECIEVED,
//     payload: {
//       newsList
//     }
//   };
//   return action;
// };

// export const getNewsList = (urlName) => {
//   // eslint-disable-next-line
//   const thunkAction = function (dispatch) {
//     dispatch(showSpinner());
//     fetchNews(urlName).then((newsList) => dispatch(fetchCandidatesListRecieved(newsList)));
//   };
//   return thunkAction;
// };
