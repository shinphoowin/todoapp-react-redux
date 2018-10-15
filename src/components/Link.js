import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ onClick, active, children }) => (
    <button
      onClick={onClick}
      disabled={active}
      >
      {children}
    </button>
	)

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}
export default Link;