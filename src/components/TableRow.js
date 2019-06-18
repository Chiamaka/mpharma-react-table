import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { TableBodyRow, TableBodyData, Pill } from './styles';
import { DataIndexContext } from '../context/DataIndexContext';
import { countries } from '../utils/';

function formatDate (item) {
  if (typeof item === 'string') {
    const date = new Date(item).getFullYear();
    if (!isNaN(date)) return format(new Date(item), 'ddd Do MMM YYYY');
    return false;
  }
}

function formatActive (item) {
  if (typeof item === 'boolean') {
    return item ? <Pill active>Active</Pill> : <Pill inactive>Inactive</Pill>;
  }
}

function formatCountry (item, key) {
  if (typeof item === 'string' && key === 'country') {
    return countries[item];
  }
}

function TableRow ({ item, renderIcon, last }) {
  const dataIndexes = useContext(DataIndexContext);
  return (
    <TableBodyRow last={last}>
      {dataIndexes.map(({ dataIndex: key, align = 'left', style }, index) => {
        return (
          <TableBodyData key={index} align={align} style={style}>
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
  renderIcon: PropTypes.func,
  last: PropTypes.bool
};

export default TableRow;
