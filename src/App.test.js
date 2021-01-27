import React from 'react';
import { mount } from 'enzyme'
import { findByTestAttr } from './../test/testUtils'
import App from './App';

import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()

/**
 * Setup function for app component
 * @returns {ReactWrapper}
 */
const setup = () => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord=mockGetSecretWord

  // use mount, because useEffect not called on 'shallow' for now
  // https://github.com/airbnb/enzyme/issues/
  return mount(<App />)
}

test('App renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
});

describe('getSecretWord call', () => {
  test('getSecretWord gets called on App Mpunt', () => {
    setup()

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled()
  })
})