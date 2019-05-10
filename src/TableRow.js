import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { TableBodyRow, TableBodyData } from './styles';
import { DataIndexContext } from './context/DataIndexContext';
import { countries } from './utils';

function formatDate (item) {
  if (typeof item === 'string') {
    const date = new Date(item).getFullYear();
    if (!isNaN(date)) return format(new Date(item), 'ddd Do MMM YYYY');
    return false;
  }
}

function formatActive (item) {
  if (typeof item === 'boolean') {
    return item ? 'Active' : 'InActive';
  }
}

function formatCountry (item, key) {
  if (typeof item === 'string' && key === 'country') {
    return countries[item];
  }
}

function TableRow ({ item, renderIcon }) {
  const dataIndexes = useContext(DataIndexContext);
  return (
    <TableBodyRow>
      {dataIndexes.map(({ dataIndex: key, align = 'left' }, index) => {
        return (
          <TableBodyData key={index} align={align}>
            {formatDate(item[key]) || formatActive(item[key]) || formatCountry(item[key], key) || item[key] || '-'}
          </TableBodyData>
        );
      })}
      {renderIcon(item)}
    </TableBodyRow>
  );
}

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  renderIcon: PropTypes.func
};

export default TableRow;
