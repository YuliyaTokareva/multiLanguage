const baseUrl = 'https://mockend.com/mockend/demo/posts';

//mport { newsPerPage } from '../common/utils/newsData';

export const combineGetUrl = (pageNumber: number, newsPerPage: number): string => {
  return `${baseUrl}?offset=${pageNumber}&&limit=${newsPerPage}`;
};
export const baseUrlToUpdate = combineGetUrl(0, 6);
export const fetchNews = async (urlName: string) => {
  try {
    const response = await fetch(urlName, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const res = await response.json();

    if (!res) {
      throw new Error('Empty response!');
    }

    return res;
  } catch (error) {
    throw new Error(`Failed to fetch news: ${error.message}`);
  }
};

export const deleteNews = async (newsId: number) => {
  try {
    const response = await fetch(`https://mockend.com/mockend/demo/posts/${newsId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    throw new Error(`There was a problem with the fetch operation: ${error.message}`);
  }
};
