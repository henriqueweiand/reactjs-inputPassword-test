import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import InputPassword from '../InputPassword';

it('should render as expected', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.contains(<InputPassword />)).toBe(true);
});
