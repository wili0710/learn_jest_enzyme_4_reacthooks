import React from 'react';
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from './../test/testUtils'
import Input from './Input';

/**
 * Setup function for app component
 * @returns {shallowwrapper}
 */
const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>)
}

test('App renders without error', () => {
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, 'component-input')
  expect(inputComponent.length).toBe(1)
});

test('does not throw warning with expected props', () => {
    checkProps(Input, { secretWord: 'party' })
})