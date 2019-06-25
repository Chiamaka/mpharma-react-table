import React from 'react';
import { default as Thead } from './TableHeader';
import { Paper } from '../styles';

// Experimental:
// Want to be able to export a standard header with box shadow to display in loader animation
const TableHeader = props => (
  <Paper>
    <table>
      <Thead {...props} />
    </table>
  </Paper>
);

export default TableHeader;
