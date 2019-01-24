import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Page, Label } from './styles';
import Rules from './components/Rules';
import Bars from './components/Bars';

export default class InputPassword extends Component {
  state = {
    value: '',
    rules: [],
    activeBars: 0,
    status: 'default', // default, warning, danger
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
      let newActiveBars = 0;
      let newStatus = status;
      let contValid = 0;

      // < Rules
      rules.map((row) => {
        const [rule, valueRule] = row.rule.split(':');
        let valid = false;

        switch (rule) {
          case 'exists':
            valid = value.indexOf(valueRule) > -1;
            break;

          case 'min':
            valid = value.length >= valueRule;
            break;

          case 'max':
            valid = value.length <= valueRule;
            break;

          default:
            valid = false;
        }

        if (valid) { contValid += 1; }

        return newRules.push({
          ...row,
          valid,
        });
      });
      // > Rules

      // < Progress & status
      if (contValid === rules.length) {
        newStatus = 'success';
        newActiveBars = 3;
      } else {
        switch (rules.length) {
          case 1:
            newStatus = 'danger';
            newActiveBars = 1;
            break;
          case 2:
            if (contValid === 1) {
              newStatus = 'warning';
              newActiveBars = 2;
            } else {
              newStatus = 'danger';
              newActiveBars = 1;
            }
            break;
          default:
            if (contValid < (rules.length / 2)) {
              newStatus = 'danger';
              newActiveBars = 1;
            } else {
              newActiveBars = 2;
              newStatus = 'warning';
            }
        }
      }
      // > Progress & status

      this.setState({
        rules: newRules,
        status: newStatus,
        activeBars: newActiveBars,
      });
    } else {
      this.setState({ rules, status: 'default' });
    }
  }

  render() {
    const {
      rules, status, value, activeBars,
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
        <Bars activeBars={activeBars} status={status} />
        <Rules rules={rules} />
      </Page>
    );
  }
}
