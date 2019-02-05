/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Column from '../../components/Column';
import H3 from '../../components/H3';
import Content from '../../components/Content';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getAgenciesRequest();
    this.props.getCategoriesRequest();
    this.props.getPricesRequest();
  }

  render() {
    const { agencies, categories, prices } = this.props;
    console.log({ agencies, categories, prices });
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="A Deck dash application" />
        </Helmet>
        <Content>
          <Column>
            <H3>Agencies</H3>
            <H3>Categories</H3>
            <H3>Show All (Yes/No)</H3>
          </Column>
        </Content>
      </article>
    );
  }
}

HomePage.propTypes = {
  agencies: PropTypes.array,
  categories: PropTypes.array,
  prices: PropTypes.array,
  getAgenciesRequest: PropTypes.func.isRequired,
  getCategoriesRequest: PropTypes.func.isRequired,
  getPricesRequest: PropTypes.func.isRequired,
};

export default HomePage;
