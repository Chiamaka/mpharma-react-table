import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow';
import { withDataContext } from '../../context/DataStore';

function TableBody(props) {
  const {
    data,
    dataIndexes,
    count,
    hover,
    handleRowClick,
    rowsPerPageOptions,
    renderIcon,
    context
  } = props;
  const { loadData, currentPage, rowsPerPage } = context;
  const upperBound = currentPage * rowsPerPage;
  const lowerBound = currentPage * rowsPerPage + rowsPerPage;

  useEffect(() => {
    loadData({
      data,
      count,
      dataIndexes,
      rowsPerPageOptions,
      rowsPerPage: rowsPerPage || rowsPerPageOptions[0]
    });
  }, [data]);

  return (
    <tbody data-testid='table-body'>
      {context.data.slice(upperBound, lowerBound).map((item, index) => {
        return (
          <TableRow
            item={item}
            key={index}
            renderIcon={renderIcon}
            hover={hover}
            handleRowClick={handleRowClick}
          />
        );
      })}
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataIndexes: PropTypes.arrayOf(PropTypes.object).isRequired,
  hover: PropTypes.bool,
  count: PropTypes.number,
  handleRowClick: PropTypes.func,
  renderIcon: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  context: PropTypes.object
};

TableBody.defaultProps = {
  dataIndexes: [],
  rowsPerPageOptions: [25, 50, 100],
  renderIcon: () => {}
};

export default withDataContext(TableBody);
