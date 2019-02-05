import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Table = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: stretch;
  margin-left: 2em;
  margin-top: 2em;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: stretch;
  height: 2em;
`;

export const HeadRow = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: stretch;
  height: 1.5em;
  color: #cccccc;
  border-bottom: solid 1px #ff9999;
  font-weight: bold;
`;

export const Cell = styled.div`
  width: 10em;
`;

const Prices = ({ items }) => (
  <Table>
    <HeadRow>
      <Cell key="price">Price</Cell>
      <Cell key="suggested">Suggested Price</Cell>
    </HeadRow>
    {items &&
      items.map(e => (
        <Row key={e.id}>
          <Cell key="price">{e.price}</Cell>
          <Cell key="suggested">{e.suggestedPrice}</Cell>
        </Row>
      ))}
  </Table>
);

Prices.propTypes = {
  items: PropTypes.array,
};

export default Prices;
