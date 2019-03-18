import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper } from './styles';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { extractDataIndexes, DataIndexContext } from './utils/';

function Table ({ headers, data, renderIcon, tableStyle }) {
  return (
    <TableWrapper style={tableStyle}>
      <TableHeader headers={headers} />
      <DataIndexContext.Provider value={extractDataIndexes(headers)}>
        <TableBody data={data} renderIcon={renderIcon} />
      </DataIndexContext.Provider>
    </TableWrapper>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  renderIcon: PropTypes.func,
  tableStyle: PropTypes.object
};

Table.defaultProps = {
  headers: [],
  data: [],
  renderIcon: () => {},
  tableStyle: {}
};

export default Table;
