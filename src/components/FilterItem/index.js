'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class FilterItem extends Component {
  constructor(props) {
    super(props);
    this.callAction = this.callAction.bind(this);
  }

  callAction() {
    const { action } = this.props;
    action();
  }

  render() {
    const { name, className } = this.props;
    return (
      <Button onClick={this.callAction} className={className}>
        {name}
      </Button>
    );
  }
}

FilterItem.PropTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

FilterItem.defaultProps = {
  className: null,
};

export default FilterItem;