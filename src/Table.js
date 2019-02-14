import React from 'react';
import PropTypes from 'prop-types';
import {
  TableWrapper,
  TableHeadRow,
  TableHeader,
  TableBodyRow,
  TableBodyData,
  TableFooterData,
  TableFooterRow,
  TableSpacer,
  NumbersData,
  AmountDue
} from './styles';

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object)
};

Table.defaultProps = {
  headers: [],
  data: []
};

function Table ({ headers, data }) {
  console.log(data);
  return (
    <TableWrapper>
      <thead>
        <TableHeadRow>
          {headers.map(({ title, align }, index) => {
            return (
              <TableHeader align={align} key={index}>
                {title}
              </TableHeader>
            );
          })}
        </TableHeadRow>
      </thead>

      <tbody>
        {Array.from({ length: 8 }, (_, index) => {
          return (
            <TableBodyRow last={index + 1 === 8} key={index}>
              <TableBodyData align='left'>1/23/18</TableBodyData>
              <TableBodyData align='left' uppercase>
                AB123FB
              </TableBodyData>
              <TableBodyData align='left' uppercase>
                Abidec Drops x25
              </TableBodyData>
              <TableBodyData align='right'>10</TableBodyData>
              <TableBodyData align='right'>50.00</TableBodyData>
              <TableBodyData align='right'>100.00</TableBodyData>
              <TableBodyData align='right'>50.00</TableBodyData>
            </TableBodyRow>
          );
        })}

        <TableSpacer />

        <TableFooterRow>
          <TableFooterData colSpan='3' borderTopLeftRadius={10}>
            Percentage Margin
            <NumbersData>50%</NumbersData>
          </TableFooterData>

          <TableFooterData align='right'>
            Total cost of sales
            <NumbersData>10,000</NumbersData>
          </TableFooterData>
          <TableFooterData align='right' colSpan='2'>
            Sales Total
            <NumbersData>1,000</NumbersData>
          </TableFooterData>
          <TableFooterData align='right' borderTopRightRadius={10}>
            Total Profit
            <NumbersData>2,000</NumbersData>
          </TableFooterData>
        </TableFooterRow>

        <TableFooterRow>
          <TableFooterData colSpan='5' normal borderBottomLeftRadius={10}>
            NB: Amount due is % margin x total profit
          </TableFooterData>
          <TableFooterData align='right'>Amount Due:</TableFooterData>
          <AmountDue align='right' borderBottomRightRadius={10}>
            100,000
          </AmountDue>
        </TableFooterRow>

        <TableFooterRow backgroundColor='none'>
          <TableFooterData align='right' colSpan='6'>
            Amount Due:
          </TableFooterData>
          <AmountDue align='right' borderBottomRightRadius={10}>
            20,000
          </AmountDue>
        </TableFooterRow>

        <TableSpacer />
      </tbody>
    </TableWrapper>
  );
}

export default Table;
