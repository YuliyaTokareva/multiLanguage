import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as coctailsActions from './../../coctails.actions';
import * as coctailsSelectors from '../../coctails.selectors';

const News = ({ getCoctailsList, candidatesList, isFetching, nextpage }) => {
  // const [fetchUrl, setFetchUrl] = useState(baseUrl);

  useEffect(() => {
    getCoctailsList();
  }, []);

  // const handlerClick = (e) => {
  //   e.preventDefault();
  //   setFetchUrl(nextpage['next_url']);
  // };
  return (
    <section className="get-request">
      <h2 className="get-request__title title">Working with GET request</h2>
    </section>
  );
};

const mapDispatch = (dispatch) => {
  return {
    getCoctailsList: () => dispatch(coctailsActions.getCoctailsList())
  };
};
const mapState = (state) => {
  return {
    candidatesList: coctailsSelectors.coctailsListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(News);
