import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as coctailsActions from './../../coctails.actions';
import * as coctailsSelectors from '../../coctails.selectors';

const News = ({ getCoctailsList, candidatesList, isFetching, nextpage }) => {
  const baseUrl = 'https://mockend.com/YuliyaTokareva/multiLanguage/posts';
  const baseUrl2 = 'https://mockend.com/YuliyaTokareva/multiLanguage/posts?_offset=20&_limit=10';
  const [fetchUrl, setFetchUrl] = useState(baseUrl);

  useEffect(() => {
    getCoctailsList(baseUrl);
  }, [fetchUrl]);

  const handlerClick = (e) => {
    e.preventDefault();
    setFetchUrl(baseUrl2);
  };
  return (
    <section className="get-request">
      <h2 className="get-request__title title" onClick={(e) => handlerClick(e)}>
        Working with GET request
      </h2>
    </section>
  );
};

const mapDispatch = (dispatch) => {
  return {
    getCoctailsList: (urlName) => dispatch(coctailsActions.getCoctailsList(urlName))
  };
};
const mapState = (state) => {
  return {
    candidatesList: coctailsSelectors.coctailsListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(News);
