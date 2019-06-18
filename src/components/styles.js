import styled, { css } from 'styled-components';

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

export const Text = styled.p`
  ${text}
  font-size: ${props => (props.size ? `${props.size}px` : '13px')};
  font-weight: ${props => props.bold && 500};
`;

export const TableHeadRow = styled.tr`
  height: 55px;
`;

export const TableHeader = styled.th`
  ${text}
  letter-spacing: 0.38px;
  text-align: ${props => props.align};
  padding: 4px 40px 4px 24px;
  border-bottom: 0.5px solid rgba(221, 221, 221, 0.4);
  font-family: 'Sofia Pro Bold';
`;

export const TableBodyRow = styled.tr`
  border-bottom: ${props => (!props.last ? '0.5px solid rgba(221, 221, 221, 0.4)' : 'none')};
  text-transform: capitalize;
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
`;
