'use strict';
import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import FilterItem from '../FilterItem';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showAll, showCompleted, showProgress } = this.props.filterActions;

    return (
      <ButtonGroup aria-label="control-buttons" style={{ marginTop: '1rem' }}>
        <FilterItem action={showAll} name="SHOW_ALL" className="mr-2" />
        <FilterItem action={showCompleted} name="SHOW_COMPLETED" className="mr-2" />
        <FilterItem action={showProgress} name="SHOW_ACTIVE" />
      </ButtonGroup>
    );
  }
}

export default Filter;
