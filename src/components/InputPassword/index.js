import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Page, Label } from './styles';
import Rules from './components/Rules';
import Bars from './components/Bars';

export default class InputPassword extends Component {
  state = {
    value: '',
    rules: [],
    status: 'default', // default, warning, danger
    maxBars: 3, // Quantidade de barras de progresso
  }

  static propTypes = {
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        rule: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    rules: [],
  };

  async componentWillMount() {
    await this.handleRules();
  }

  handleChange = async (name, value) => {
    await this.setState({ [name]: value }, () => this.handleRules());
  };

  handleRules = () => {
    const { rules } = this.props;
    const { value, status } = this.state;

    if (value) {
      const newRules = [];
      let newStatus = status;
      let contValid = 0;

      rules.map((rule) => {
        const head = rule.rule.split(':');
        let valid = false;

        switch (head[0]) {
          case 'exists':
            valid = this.state.value.indexOf(head[1]) > -1;
            break;

          case 'min':
            valid = this.state.value.length >= head[1];
            break;

          case 'max':
            valid = this.state.value.length <= head[1];
            break;

          default:
            valid = false;
        }

        if (valid) { contValid++; }

        return newRules.push({
          ...rule,
          valid,
        });
      });

      if (contValid === rules.length) {
        newStatus = 'success';
      } else if (contValid < (rules.length / 2)) {
        newStatus = 'danger';
      } else {
        newStatus = 'warning';
      }

      this.setState({ rules: newRules, status: newStatus });
    } else {
      this.setState({ rules, status: 'default' });
    }
  }

  render() {
    const {
      rules, status, value, maxBars,
    } = this.state;

    return (
      <Page>
        <Label>
          Password
        </Label>
        <Input
          status={status}
          name="value"
          placeholder="Digite sua senha"
          type="password"
          value={value}
          onChange={e => this.handleChange('value', e.target.value)}
        />
        <Bars rules={rules} maxBars={maxBars} status={status} />
        <Rules rules={rules} />
      </Page>
    );
  }
}
