import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Bar, Container } from './styles';

export default class Bars extends Component {
  static propTypes = {
    maxBars: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        valid: PropTypes.bool,
      }),
    ),
  };

  static defaultProps = {
    rules: [],
  };

  handleBars = () => {
    const { maxBars, rules, status } = this.props;
    const bars = [];
    const activeBars = rules.filter((rule) => {
      if (rule.valid) { return true; } return false;
    });

    for (let cont = 0; cont < maxBars; cont++) {
      bars.push(<Bar key={cont} status={cont < activeBars.length ? status : 'default'} />);
    }

    return bars;
  }

  render() {
    return (
      <Container>
        {this.handleBars()}
      </Container>
    );
  }
}
