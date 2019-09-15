'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <FilterItem 
          action={showAll} 
          name="SHOW ALL" 
          className="mr-2"
        />
        <FilterItem 
          action={showCompleted} 
          name="SHOW COMPLETED" 
          className="mr-2"
        />
        <FilterItem 
          action={showProgress} 
          name="SHOW ACTIVE" 
        />
      </ButtonGroup>
    );
  }
}

Filter.PropTypes = {
  filterActions: PropTypes.shape({
    showAll: PropTypes.func.isRequired,
    showCompleted: PropTypes.func.isRequired,
    showProgress: PropTypes.func.isRequired
  }).isRequired
};

export default Filter;
