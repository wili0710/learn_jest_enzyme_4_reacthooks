import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttr } from './../test/testUtils'
import Input from './Input';

/**
 * Setup function for app component
 * @returns {shallowwrapper}
 */
const setup = () => {
  return shallow(<Input />)
}

test('App renders without error', () => {
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, 'component-input')
  expect(inputComponent.length).toBe(1)
});