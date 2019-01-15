import React from 'react';
import PropTypes from 'prop-types';

import { List, Item } from './styles';

const Rules = ({ rules }) => (
  <List>
    {rules.map((rule, index) => <Item key={index} valid={rule.valid}>{rule.description}</Item>)}
  </List>
);

Rules.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      description: PropTypes.string,
      valid: PropTypes.bool,
      rule: PropTypes.string,
    }),
  ).isRequired,
};

export default Rules;
