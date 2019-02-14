import styled, { css } from 'styled-components'

export const FlexRow = styled.section`
  display: flex;
  align-items: center;
`

export const text = css`
  font-size: 12px;
  margin: 0;
  color: rgba(0, 0, 0, 0.89);
  letter-spacing: 0.44px;
`

export const Text = styled.p`
  ${text}
  font-size: ${props => (props.size ? `${props.size}px` : '12px')};
  font-weight: ${props => props.bold && 500};
`

export const CurrencyRow = styled(FlexRow)`
  padding-bottom: 20px;
  justify-content: flex-end;
`

export const Divider = styled.div`
  width: 100px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
`

export const Currency = styled.p`
  ${text}
  padding: 0px 5px;
  font-weight: 500;
`

export const TableWrapper = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
`

export const TableHeadRow = styled.tr`
  height: 40px;
`

export const TableHeader = styled.th`
  ${text}
  letter-spacing: 0.38px;
  text-align: ${props => props.align};
`

export const TableBodyRow = styled.tr`
  height: 40px;
  border-bottom: ${props => (!props.last ? '1px solid rgba(0, 0, 0, 0.12)' : 'none')};
`

export const TableBodyData = styled.td`
  ${text}
  letter-spacing: 0.54px;
  text-align: ${props => props.align};
  text-transform: ${props => props.uppercase && 'uppercase'};
`

export const TableData = styled.td`
  ${text}
  letter-spacing: 0.54px;
  text-align: ${props => props.align};
  text-transform: ${props => props.uppercase && 'uppercase'};
`

export const TableSpacer = styled.tr`
  height: 20px;
`

export const TableFooterRow = styled.tr`
  height: 50px;
  background: ${props => props.backgroundColor || '#eee'};
`

export const TableFooterData = styled.td`
  ${text}
  color: rgba(0,0,0,0.6);
  font-weight: ${props => (!props.normal ? 500 : 400)};
  letter-spacing: 0.54px;
  text-align: ${props => props.align};

  ${props =>
    props.borderTopLeftRadius &&
    css`
      border-top-left-radius: ${props => props.borderTopLeftRadius + 'px'};
      padding-left: 10px;
    `}

  ${props =>
    props.borderTopRightRadius &&
    css`
      border-top-right-radius: ${props => props.borderTopRightRadius + 'px'};
      padding-right: 10px;
    `}

  ${props =>
    props.borderBottomLeftRadius &&
    css`
      border-bottom-left-radius: ${props => props.borderBottomLeftRadius + 'px'};
      padding-left: 10px;
    `}

`

export const NumbersData = styled.p`
  ${text}
  font-size: 13px;
  letter-spacing: 0.58px;
  padding-top: 5px;
  color: #000000;
  font-weight: 500;
`

export const AmountDue = styled.td`
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  letter-spacing: 0.71px;
  text-align: ${props => props.align};
  ${props =>
    props.borderBottomRightRadius &&
    css`
      border-bottom-right-radius: ${props => props.borderBottomRightRadius + 'px'};
      padding-right: 10px;
    `}
`
