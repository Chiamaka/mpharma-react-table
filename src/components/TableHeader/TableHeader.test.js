import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import DataStore from '../../context/DataStore';
import TableHeader from './TableHeader';

const headers = [
  { title: 'Name', dataIndex: 'name', width: 200 },
  { title: 'Status', dataIndex: 'is_active' },
  { title: 'Country', dataIndex: 'country' },
  { title: 'Email', dataIndex: 'email', style: { textTransform: 'none' } },
  { title: 'Created At', dataIndex: 'created_at' },
  { title: '' }
];

function renderHeader(props) {
  return render(
    <DataStore>
      <table>
        <TableHeader {...props} />
      </table>
    </DataStore>
  );
}

afterEach(cleanup);

describe('Table Header', () => {
  it('should match the number of headers inputted', () => {
    const { getAllByTestId } = renderHeader({ headers });
    const tableHeaders = getAllByTestId('table-header').length;
    expect(tableHeaders).toBe(headers.length);
  });

  it('should toggle between asc and desc icon when header is clicked', () => {
    const sortData = jest.fn();
    const { getAllByTestId, getByLabelText } = renderHeader({ headers, context: { sortData } });
    const header = getAllByTestId('table-header')[0];
    fireEvent.click(header);
    expect(getByLabelText('asc')).toBeTruthy();
    fireEvent.click(header);
    expect(getByLabelText('desc')).toBeTruthy();
  });
});
