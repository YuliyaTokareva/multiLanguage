import type { NewsArticle } from './News';

export const ActionTypes = {
  SHOW_SPINNER: 'SHOW_SPINNER',
  NEWS_LIST_RECIEVED: 'NEWS_LIST_RECIEVED',
  NEWS_POST_DELETE: 'NEWS_POST_DELETE',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN'
};

export interface State {
  newsData: {
    newsList: NewsArticle[];
    newsListPagination: NewsArticle[];
    isFetching: boolean;
    authorization: null | boolean;
  };
}
export interface InitialState {
  newsList: NewsArticle[];
  newsListPagination: NewsArticle[];
  isFetching: boolean;
  authorization: null | boolean;
}
interface Action<T extends string, P> {
  type: T;
  payload: P;
}
export interface FetchSpinnerAction extends Action<'SHOW_SPINNER', undefined> {}

export interface FetchNewsListAction
  extends Action<'NEWS_LIST_RECIEVED', { newsList: NewsArticle[] }> {}

export interface DeleteNewsListAction extends Action<'NEWS_POST_DELETE', undefined> {}

export interface getStatusAutorization extends Action<'LOGIN' | 'LOGOUT', undefined> {}
export type MapDispatchProps = {
  getNewsList: (urlName: string) => void;
};
export type Actions =
  | FetchSpinnerAction
  | FetchNewsListAction
  | DeleteNewsListAction
  | getStatusAutorization;
