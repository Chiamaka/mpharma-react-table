import React from 'react';
import PropTypes from 'prop-types';
import { withDataContext } from '../../context/DataStore';
import { TableFooter as StyledTableFooter, Select, IconButton } from './styles';
import { ReactComponent as LeftArrow } from '../../icons/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../../icons/RightArrow.svg';

export function TableFooter(props) {
  const {
    context: {
      rowsPerPageOptions,
      count,
      rowsPerPage,
      currentPage,
      lastFetchedPage,
      setLastFetchedPage,
      setCurrentPage,
      setRowsPerPage
    }
  } = props;

  const from = currentPage === 1 ? 0 : (currentPage - 1) * rowsPerPage;
  const to = Math.min(count, currentPage * rowsPerPage);

  function handleSelectChange({ target }) {
    setRowsPerPage(+target.value);
  }

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function handleNextPage() {
    if (!props.onNextPage) {
      setCurrentPage(currentPage + 1);
    }

    if (props.onNextPage && !props.errorOnNextPage) {
      setCurrentPage(currentPage + 1);
      // only advance when currentPage equals lastFetched
      // so as not to fetch already fetched data
      if (currentPage >= lastFetchedPage) {
        setLastFetchedPage(currentPage + 1);
        props.onNextPage(currentPage + 1);
      }
      return;
    }
    // if an error occured, only fetch new data and advance the current page
    // when the current page is <= last fetched page
    if (currentPage <= lastFetchedPage) {
      props.onNextPage(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <StyledTableFooter>
      <span aria-label='rows-label'>Rows per page:</span>
      <Select
        onChange={handleSelectChange}
        aria-label='select pages'
        className='select'
        data-testid='select'
      >
        {rowsPerPageOptions.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Select>

      <span aria-label='label-rows-per-page'>
        {from}-{to} of {count}
      </span>
      <div className='buttons'>
        <IconButton
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          data-testid='previous page'
        >
          <LeftArrow aria-label='previous page' />
        </IconButton>

        <IconButton
          disabled={!props.onNextPage || to === count}
          onClick={handleNextPage}
          data-testid='next page'
        >
          <RightArrow aria-label='next page' />
        </IconButton>
      </div>
    </StyledTableFooter>
  );
}

TableFooter.propTypes = {
  context: PropTypes.object,
  onNextPage: PropTypes.func,
  errorOnNextPage: PropTypes.bool
};

export default withDataContext(TableFooter);
