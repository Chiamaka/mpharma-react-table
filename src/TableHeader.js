import React from 'react';
import PropTypes from 'prop-types';
import { TableHeadRow, TableHeader as StyledTableHeader } from './styles';

function TableHeader ({ headers }) {
  return (
    <thead>
      <TableHeadRow>
        {headers.map(({ title, align = 'left', width }, index) => {
          return (
            <StyledTableHeader align={align} key={index} width={width}>
              {title}
            </StyledTableHeader>
          );
        })}
      </TableHeadRow>
    </thead>
  );
}

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableHeader;
