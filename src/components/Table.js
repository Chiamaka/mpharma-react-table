import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import DataStore, { extractDataIndexes } from '../context/DataStore';
import { TableWrapper, Paper } from './styles';

function Table(props) {
  const {
    headers,
    data,
    hover,
    handleRowClick,
    renderIcon,
    tableStyle,
    tableBodyStyle,
    rowsPerPageOptions,
    onNextPage,
    emptyMessage,
    emptyMessageStyle
  } = props;
  const indexes = extractDataIndexes(headers);

  return (
    <DataStore>
      <Paper style={tableStyle}>
        <div style={{ ...tableBodyStyle, overflow: 'auto' }}>
          <TableWrapper>
            <TableHeader headers={headers} />
            {data.length === 0 ? (
              <tbody style={emptyMessageStyle}>
                <tr>
                  <td>{emptyMessage || 'No data available!'}</td>
                </tr>
              </tbody>
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
        {data.length > 0 && <TableFooter onNextPage={onNextPage} />}
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
  onNextPage: PropTypes.func,
  emptyMessage: PropTypes.string,
  emptyMessageStyle: PropTypes.object,
  renderIcon: PropTypes.func,
  tableStyle: PropTypes.object,
  tableBodyStyle: PropTypes.object
};

Table.defaultProps = {
  headers: [],
  data: [],
  rowsPerPageOptions: [25, 50, 100],
  handleRowClick: () => {},
  renderIcon: () => {},
  tableStyle: {},
  tableBodyStyle: {
    maxHeight: '75vh'
  }
};

export default Table;
