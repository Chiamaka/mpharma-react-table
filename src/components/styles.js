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
