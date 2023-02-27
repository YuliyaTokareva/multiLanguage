import { fetchNews, deleteNews, baseUrlToUpdate } from './dataGateway';
import { Dispatch } from 'redux';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const NEWS_LIST_RECIEVED = 'NEWS_LIST_RECIEVED';
export const NEWS_POST_DELETE = 'NEWS_POST_DELETE';
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
export const deletePost = () => ({
  type: ActionTypes.NEWS_POST_DELETE
});

export const getNewsList = (urlName: string) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch: Dispatch) {
    dispatch(showSpinner());
    fetchNews(urlName).then((newsList) => dispatch(fetchNewsListRecieved(newsList)));
  };
  return thunkAction;
};

export const deleteNewsPost = (newsId: number) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    dispatch(deletePost());
    deleteNews(newsId).then(() => dispatch(getNewsList(baseUrlToUpdate)));
  };
  return thunkAction;
};
