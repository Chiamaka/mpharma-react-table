import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { text } from './styles';
import { withDataContext } from '../context/DataStore';
import { formatDate, formatActive, formatCountry } from '../utils/';

const TableBodyRow = styled.tr`
  height: 50px;
  border-bottom: 0.5px solid rgba(221, 221, 221, 0.4);
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    background-color: ${props => props.hover && 'rgba(0, 0, 0, 0.07)'};
  }
`;

const TableBodyData = styled.td`
  ${text}
  letter-spacing: 0.54px;
  text-align: ${props => props.align};
  text-transform: ${props => props.uppercase && 'uppercase'};
  padding: 4px 40px 4px 24px;
`;

function TableRow({ item, hover, handleRowClick, renderIcon, context }) {
  function handleClick() {
    return handleRowClick(item);
  }
  return (
    <TableBodyRow hover={hover} data-testid="table-row">
      {context.dataIndexes.map(({ dataIndex: key, render, align = 'left', style }, index) => {
        return (
          <TableBodyData key={index} align={align} style={style} onClick={handleClick}>
            {formatDate(item[key]) ||
              formatActive(item[key]) ||
              formatCountry(item[key], key) ||
              (render && render(item[key])) ||
              item[key] ||
              '-'}
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
