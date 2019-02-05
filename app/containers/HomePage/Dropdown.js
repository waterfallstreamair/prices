import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Select = styled.select`
  margin-bottom: 1em;
`;

const Dropdown = ({ items, onClick }) => (
  <Select>
    {items &&
      items.map(e => (
        <option key={e.id} onClick={() => onClick({ item: e })}>
          {e.name}
        </option>
      ))}
  </Select>
);

Dropdown.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default Dropdown;
