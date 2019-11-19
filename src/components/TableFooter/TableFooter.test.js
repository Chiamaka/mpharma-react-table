import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TableFooter } from './TableFooter';

describe('Table Footer', () => {
  function renderFooter(props) {
    return render(<TableFooter {...props} />);
  }

  afterEach(cleanup);
  const props = {
    context: {
      rowsPerPageOptions: [5, 10],
      count: 9,
      rowsPerPage: 5,
      currentPage: 1,
      setCurrentPage: jest.fn(),
      setRowsPerPage: jest.fn()
    }
  };

  it('should disable the previous page button on first page', () => {
    const { getByTestId } = renderFooter(props);
    expect(getByTestId('previous page')).toBeDisabled();
  });

  it('should disable the next page button if there is no next page', () => {
    const moreProps = { context: { ...props.context, currentPage: 1 } };
    const { getByTestId } = renderFooter(moreProps);
    const nextPageBtn = getByTestId('next page');
    expect(nextPageBtn).toBeDisabled();
  });

  it('should display correct label', () => {
    const { getByLabelText } = renderFooter(props);
    const expectedLabel = '0-5 of 9';
    expect(getByLabelText('label-rows-per-page').textContent).toBe(expectedLabel);
  });

  it('should not be disabled when onNextPage is supplied', () => {
    const moreProps = { onNextPage: jest.fn(), context: { ...props.context, currentPage: 1 } };
    const { getByTestId } = renderFooter(moreProps);
    const nextPageBtn = getByTestId('next page');
    expect(nextPageBtn).not.toBeDisabled();
  });
});
