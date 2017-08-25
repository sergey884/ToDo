'use strict';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactTestUtils from 'react-dom/test-utils';
import TodoApp from './App';

describe('TodoApp Component', () => {
    it("Render App component", () => {
        const component = ReactTestUtils.renderIntoDocument(<TodoApp />);
        console.log(component);
    });
});