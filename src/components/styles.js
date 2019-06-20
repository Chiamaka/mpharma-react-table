import styled, { css } from 'styled-components';
import CaretDown from '../icons/CaretDown.png';

export const FlexRow = styled.section`
  display: flex;
  align-items: center;
`;

export const text = css`
  font-size: 13px;
  margin: 0;
  color: rgba(0, 0, 0, 0.89);
  letter-spacing: 0.44px;
`;

export const Paper = styled.div`
  ${props => props.style};
  width: max-content;
  margin: 50px auto;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
`;
export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  color: #757575;
  font-size: 12px;

  .buttons {
    margin-left: 20px;
  }

  .select {
    display: flex;
    margin-left: 32px;
    margin-right: 32px;
  }
`;

export const TableBodyRow = styled.tr`
  border-bottom: 0.5px solid rgba(221, 221, 221, 0.4);
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    background-color: ${props => props.hover && 'rgba(0, 0, 0, 0.07)'};
  }
`;

export const TableBodyData = styled.td`
  ${text}
  letter-spacing: 0.54px;
  text-align: ${props => props.align};
  text-transform: ${props => props.uppercase && 'uppercase'};
  padding: 4px 40px 4px 24px;
`;

export const Pill = styled.span.attrs(props => ({
  'aria-label': props.children
}))`
  border-radius: 17px;
  background-color: ${props => (props.active ? 'rgba(63,218,152,0.17)' : 'rgba(255, 100, 124, 0.17)')};
  color: ${props => (props.active ? '#3FDA98' : '#FF647C')};
  border: ${props => (props.active ? '1px solid #3FDA98' : '1px solid #FF647C')};
  padding: ${props => (props.active ? '5px 15px' : '5px 10px')}
  font-size: 12px;
  font-family: Sofia Pro Bold;
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  width: 50px;
  color: #757575;
  cursor: pointer;
  background: url(${CaretDown}) 50% / 50% no-repeat #fff;
`;

export const IconButton = styled.button`
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  border: none;
  outline: none;
  padding: 12px;
  cursor: pointer;
  svg {
    fill: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.26)' : 'inherit')};
  }
`;
