import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader/';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import DataStore, { extractDataIndexes } from '../context/DataStore';
import { TableWrapper, Paper } from './styles';

function Table (props) {
  const {
    headers,
    data,
    hover,
    handleRowClick,
    renderIcon,
    tableStyle,
    rowsPerPageOptions,
    emptyMessage,
    emptyMessageStyle
  } = props;
  const indexes = extractDataIndexes(headers);

  return (
    <DataStore>
      <Paper style={tableStyle}>
        <div style={{ maxHeight: '75vh', overflow: 'auto' }}>
          <TableWrapper>
            <TableHeader headers={headers} />
            {data.length === 0 ? (
              <p style={emptyMessageStyle}>{emptyMessage || 'No data available!'}</p>
            ) : (
              <TableBody
                data={data}
                dataIndexes={indexes}
                hover={hover}
                handleRowClick={handleRowClick}
                renderIcon={renderIcon}
                rowsPerPageOptions={rowsPerPageOptions}
              />
            )}
          </TableWrapper>
        </div>
        {data.length > 0 && <TableFooter />}
      </Paper>
    </DataStore>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  hover: PropTypes.bool,
  handleRowClick: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  emptyMessage: PropTypes.string,
  emptyMessageStyle: PropTypes.object,
  renderIcon: PropTypes.func,
  tableStyle: PropTypes.object
};

Table.defaultProps = {
  headers: [],
  data: [],
  rowsPerPageOptions: [25, 50, 100],
  handleRowClick: () => {},
  renderIcon: () => {},
  tableStyle: {}
};

export default Table;
