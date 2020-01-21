import React from "react";
import PropTypes from "prop-types";
import { withDataContext } from "../../context/DataStore";
import { TableFooter as StyledTableFooter, Select, IconButton } from "./styles";
import { ReactComponent as LeftArrow } from "../../icons/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../icons/RightArrow.svg";

export function TableFooter(props) {
  const {
    context: {
      rowsPerPageOptions,
      count,
      rowsPerPage,
      currentPage,
      setCurrentPage,
      setRowsPerPage
    }
  } = props;

  const to = Math.min(count, (currentPage + 1) * rowsPerPage);
  const from = count === 0 ? 0 : currentPage * rowsPerPage + 1;

  function handleSelectChange({ target }) {
    setRowsPerPage(+target.value);
  }

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function handleNextPage() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    props.onNextPage && props.onNextPage(nextPage);
  }

  return (
    <StyledTableFooter>
      <span aria-label="rows-label">Rows per page:</span>
      <Select
        onChange={handleSelectChange}
        aria-label="select pages"
        className="select"
        data-testid="select"
      >
        {rowsPerPageOptions.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Select>

      <span aria-label="label-rows-per-page">
        {from}-{to} of {count}
      </span>
      <div className="buttons">
        <IconButton
          disabled={currentPage === 0}
          onClick={handlePrevPage}
          data-testid="previous page"
        >
          <LeftArrow aria-label="previous page" />
        </IconButton>

        <IconButton
          disabled={!props.onNextPage || to === count}
          onClick={handleNextPage}
          data-testid="next page"
        >
          <RightArrow aria-label="next page" />
        </IconButton>
      </div>
    </StyledTableFooter>
  );
}

TableFooter.propTypes = {
  context: PropTypes.object,
  onNextPage: PropTypes.func
};

export default withDataContext(TableFooter);
