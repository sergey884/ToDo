'use strict';
import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import Filter from '../Filter';

const setup = (overrideProps) => {
  const props = {
    todo: [],
    todoActions: {},
    ...overrideProps
  };

  return shallow(<App {...props} />);
};

describe('TodoApp Component', () => {
  test('Should render AddTodo component', () => {
    const wrapper = setup();
    expect(wrapper.find(AddTodo)).toBeDefined();
  });

  test('Should render TodoList component', () => {
    const wrapper = setup();
    expect(wrapper.find(TodoList)).toBeDefined();
  });

  test('Should render Filter component', () => {
    const wrapper = setup();
    expect(wrapper.find(Filter)).toBeDefined();
  });
});