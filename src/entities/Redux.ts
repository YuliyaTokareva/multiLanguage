import type { NewsArticle } from './News';

export const ActionTypes = {
  SHOW_SPINNER: 'SHOW_SPINNER',
  NEWS_LIST_RECIEVED: 'NEWS_LIST_RECIEVED',
  NEWS_POST_DELETE: 'NEWS_POST_DELETE'
};

export interface State {
  newsData: {
    newsList: NewsArticle[];
    newsListPagination: NewsArticle[];
    isFetching: boolean;
  };
}
export interface InitialState {
  newsList: NewsArticle[];
  newsListPagination: NewsArticle[];
  isFetching: boolean;
}
interface Action<T extends string, P> {
  type: T;
  payload: P;
}
export interface FetchSpinnerAction extends Action<'SHOW_SPINNER', undefined> {}

export interface FetchNewsListAction
  extends Action<'NEWS_LIST_RECIEVED', { newsList: NewsArticle[] }> {}

export interface DeleteNewsListAction extends Action<'NEWS_POST_DELETE', undefined> {}

export type Actions = FetchSpinnerAction | FetchNewsListAction | DeleteNewsListAction;

export type MapDispatchProps = {
  getNewsList: (urlName: string) => void;
};
