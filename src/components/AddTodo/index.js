'use strict';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';

function AddTodo(props) {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    const { addNewTodo } = props;
    setInputValue('');
    addNewTodo(inputValue);
  };

  const handleChange = event => {
    const { target: { value } } = event;
    setInputValue(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control
            type="text"
            className="t__AddTodo-input"
            placeholder="Type todo name..."
            value={inputValue}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Button type="submit">Add ToDo</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

AddTodo.PropTypes = {
  addNewTodo: PropTypes.func.isRequired
};

export default AddTodo;