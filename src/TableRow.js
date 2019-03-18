import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TableBodyRow, TableBodyData } from './styles';
import { DataIndexContext } from './utils/';

function TableRow ({ item, renderIcon }) {
  const dataIndexes = useContext(DataIndexContext);
  return (
    <TableBodyRow>
      {dataIndexes.map(({ dataIndex: idx, align = 'left' }, index) => {
        return (
          <TableBodyData key={index} align={align}>
            {item[idx]}
          </TableBodyData>
        );
      })}
      {renderIcon()}
    </TableBodyRow>
  );
}

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  renderIcon: PropTypes.func
};

export default TableRow;
