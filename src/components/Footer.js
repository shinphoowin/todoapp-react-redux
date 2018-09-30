import React from 'react';
import { VisibiltiyFilters } from '../actions';
import FilterLink from '../FilterLink';

const Footer = () => (
    <div style={{ clear: 'both' }}>
    	<span>Show: </span>
    	<FilterLink filter={VisibiltiyFilters.SHOW_ALL}>ALL</FilterLink>
    	<FilterLink filter={VisibiltiyFilters.SHOW_ACTIVE}>Active</FilterLink>
    	<FilterLink filter={VisibiltiyFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
	)
export default Footer;