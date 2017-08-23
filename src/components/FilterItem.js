'use strict';
import React, { Component } from "react";

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
        const { name } = this.props;
        return (
            <button onClick={this.callAction}>{name}</button>
        );
    }
}

export default FilterItem;