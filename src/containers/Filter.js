'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/FilterActions';
import Filter from '../components/Filter';

const mapStateToProps = (state) => ({
    filter  : state.filter
});

const mapDispatchToActions = (dispatch) => ({
    filterActions : bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToActions)(Filter);

