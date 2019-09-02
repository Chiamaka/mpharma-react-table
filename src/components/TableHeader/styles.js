import styled from 'styled-components';
import { text } from '../styles';

export const TableHeadRow = styled.tr`
  height: 55px;
  cursor: pointer;
  th {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
`;

export const TableHeader = styled.th`
  ${text}
  letter-spacing: 0.38px;
  text-align: ${props => props.align};
  padding: 4px 40px 4px 24px;
  border-bottom: 0.5px solid rgba(221, 221, 221, 0.4);
  font-family: 'Sofia Pro Bold';

  svg {
    vertical-align: middle;
    color: rgba(0, 0, 0, 0.87);
  }
`;
