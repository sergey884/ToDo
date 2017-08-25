'use strict';
import React, { Component } from 'react';
import FilterItem from './FilterItem';

class Filter extends Component {
   constructor(props) {
       super(props);
   }

   render() {
       const { filterActions : { showAll, showCompleted, showProgress} } = this.props;

       return (
           <div>
               <FilterItem action={showAll} name = "SHOW_ALL" />
               <FilterItem action={showCompleted} name = "SHOW_COMPLETED" />
               <FilterItem action={showProgress} name = "SHOW_ACTIVE" />
           </div>
       );
   }
}

export default Filter;
