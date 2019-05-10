import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

function TableBody ({ data, renderIcon }) {
  console.log('data', data);
  return (
    <tbody>
      {data.map((item, index) => {
        return <TableRow item={item} key={index} renderIcon={renderIcon} />;
      })}
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderIcon: PropTypes.func
};

export default TableBody;
