import React from 'react';
import PropTypes from 'prop-types';
import { withDataContext } from '../context/DataStore';
import { TableBodyRow, TableBodyData } from './styles';
import { formatDate, formatActive, formatCountry } from '../utils/';

function TableRow ({ item, hover, handleRowClick, renderIcon, context }) {
  function handleClick () {
    return handleRowClick(item);
  }
  return (
    <TableBodyRow hover={hover} onClick={handleClick}>
      {context.dataIndexes.map(({ dataIndex: key, align = 'left', style }, index) => {
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
  hover: PropTypes.bool,
  handleRowClick: PropTypes.func,
  context: PropTypes.object
};

export default withDataContext(TableRow);
