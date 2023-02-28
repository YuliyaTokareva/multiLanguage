//eslint-disable-next-line
import type { State } from './../entities/Redux';
export const newsListSelector = (state: State) => state.newsData.newsList;
export const isFetchingSelector = (state: State) => state.newsData.isFetching;
export const newsListPagination = (state: State) => state.newsData.newsListPagination;
export const statusAutorization = (state: State) => state.newsData.authorization;
