import React from 'react';
import PropTypes from 'prop-types';
import { withDataContext } from '../../context/DataStore';
import { TableHeadRow, TableHeader as StyledTableHeader } from './styles';
import { ReactComponent as ArrowUp } from '../../icons/ArrowUp.svg';
import { ReactComponent as ArrowDown } from '../../icons/ArrowDown.svg';

function TableHeader(props) {
  const { headers, context } = props;

  function sortData(dataIndex) {
    return function() {
      context.sortData(dataIndex);
    };
  }

  return (
    <thead>
      <TableHeadRow>
        {headers.map(({ title, align = 'left', width, dataIndex }, index) => {
          return (
            <StyledTableHeader
              key={index}
              align={align}
              width={width}
              onClick={sortData(dataIndex)}
              data-testid='table-header'
            >
              {title}{' '}
              {context &&
                context.active === dataIndex &&
                (context.desc ? <ArrowDown aria-label='asc' /> : <ArrowUp aria-label='desc' />)}
            </StyledTableHeader>
          );
        })}
      </TableHeadRow>
    </thead>
  );
}

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  context: PropTypes.object
};

export default withDataContext(React.memo(TableHeader));
