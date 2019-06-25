import React from 'react';
import PropTypes from 'prop-types';
import { default as Thead } from './TableHeader';
import { Paper } from '../styles';

// Experimental:
// Want to be able to export a standard header with box shadow to display in loader animation
const TableHeader = props => (
  <Paper style={props.style}>
    <table style={{ width: '100%' }}>
      <Thead {...props} />
    </table>
  </Paper>
);

TableHeader.propTypes = {
  style: PropTypes.object
};

export default TableHeader;
