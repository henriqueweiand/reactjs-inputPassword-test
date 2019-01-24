import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Bar, Container } from './styles';

export default class Bars extends Component {
  static propTypes = {
    status: PropTypes.string,
    activeBars: PropTypes.number,
  };

  static defaultProps = {
    activeBars: 0,
    status: 'status',
  };

  handleBars = () => {
    const { activeBars, status } = this.props;
    const bars = [];

    for (let cont = 0; cont < 3; cont += 1) {
      bars.push(<Bar key={cont} status={cont < activeBars ? status : 'default'} />);
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
