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
import Dropdown from './Dropdown';
import Prices from './Prices';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getAgenciesRequest();
  }

  agencyClick = ({ item }) => {
    this.props.getCategoriesRequest({ agencyId: item.id });
  };

  categoryClick = ({ item }) => {
    this.props.getPricesRequest({ categoryId: item.id });
  };

  yesNoClick = ({ item }) => {
    this.props.getFilteredRequest({ isValid: item.id === 2 });
  };

  render() {
    const { agencies, categories, prices, filtered } = this.props;
    const yesNo = [
      { id: 1, name: 'Yes - all' },
      { id: 2, name: 'No - only validated' },
    ];
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="A Prices application" />
        </Helmet>
        <Content>
          <Column>
            <H3>Agency</H3>
            <Dropdown items={agencies} onClick={this.agencyClick} />
            <H3>Category</H3>
            <Dropdown items={categories} onClick={this.categoryClick} />
            <H3>Show All (Yes/No)</H3>
            <Dropdown items={yesNo} onClick={this.yesNoClick} />
          </Column>
          <Prices items={filtered || prices} />
        </Content>
      </article>
    );
  }
}

HomePage.propTypes = {
  agencies: PropTypes.array,
  categories: PropTypes.array,
  prices: PropTypes.array,
  filtered: PropTypes.array,
  getAgenciesRequest: PropTypes.func.isRequired,
  getCategoriesRequest: PropTypes.func.isRequired,
  getPricesRequest: PropTypes.func.isRequired,
  getFilteredRequest: PropTypes.func.isRequired,
};

export default HomePage;
