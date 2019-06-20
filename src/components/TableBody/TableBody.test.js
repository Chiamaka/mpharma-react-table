import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DataStore from '../../context/DataStore';
import TableBody from './TableBody';

const data = [
  {
    name: 'Chiamaka',
    country: 'Nigeria',
    age: 25
  },
  {
    name: 'Nick',
    country: 'Ghana',
    age: 30
  },
  {
    name: 'Alfred',
    country: 'USA',
    age: 30
  }
];

describe('Table Body', () => {
  function renderBody(props) {
    return render(
      <DataStore>
        <table>
          <TableBody {...props} />
        </table>
      </DataStore>
    );
  }

  afterEach(cleanup);

  it('should display the table body', () => {
    const { getByTestId } = renderBody({ data });
    expect(getByTestId('table-body')).toBeTruthy();
  });

  it('should display all rows', () => {
    const { getAllByTestId } = renderBody({ data });
    const numOfRows = getAllByTestId('table-row').length;
    expect(numOfRows).toBe(data.length);
  });
});
