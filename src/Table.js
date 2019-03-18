import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper } from './styles';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { extractDataIndexes, DataIndexContext } from './utils/';

function Table ({ headers, data, renderIcon }) {
  return (
    <TableWrapper>
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
  renderIcon: PropTypes.func
};

Table.defaultProps = {
  headers: [],
  data: [],
  renderIcon: () => {}
};

export default Table;
