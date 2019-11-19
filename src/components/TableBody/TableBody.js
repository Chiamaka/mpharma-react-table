import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow';
import { withDataContext } from '../../context/DataStore';

function TableBody(props) {
  const {
    data,
    dataIndexes,
    hover,
    handleRowClick,
    rowsPerPageOptions,
    onNextPage,
    errorOnNextPage,
    renderIcon,
    context
  } = props;
  const { loadData, currentPage, rowsPerPage, setCurrentPage } = context;
  const lowerBound = currentPage * rowsPerPage - rowsPerPage;
  const upperBound = currentPage * rowsPerPage;

  useEffect(() => {
    loadData({
      data,
      dataIndexes,
      rowsPerPageOptions,
      rowsPerPage: rowsPerPage || rowsPerPageOptions[0]
    });
  }, [data]);

  useEffect(() => {
    // when there's an error, backtrack to previous page
    if (onNextPage && errorOnNextPage) {
      setCurrentPage(currentPage - 1);
    }
  }, [errorOnNextPage]);

  return (
    <tbody data-testid='table-body'>
      {context.data.slice(lowerBound, upperBound).map((item, index) => {
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
  handleRowClick: PropTypes.func,
  renderIcon: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  context: PropTypes.object,
  onNextPage: PropTypes.func,
  errorOnNextPage: PropTypes.bool
};

TableBody.defaultProps = {
  dataIndexes: [],
  rowsPerPageOptions: [25, 50, 100],
  renderIcon: () => {}
};

export default withDataContext(TableBody);
