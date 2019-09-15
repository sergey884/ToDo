'use strict';
import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'react-bootstrap';
import AddTodo from './index';

const setup = (overrideProps) => {
  const props = {
    addNewTodo: () => { },
    ...overrideProps
  };

  return shallow(<AddTodo {...props} />);
};

describe('TodoApp Component', () => {
  test('Should render Form.Control component', () => {
    const wrapper = setup();
    const formControl = wrapper.find(Form.Control);
    expect(formControl.length).toEqual(1);
  });
});