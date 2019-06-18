import styled from 'styled-components';

export const TableWrapper = styled.table`
  ${props => props.style};
  width: 80%;
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
`;
