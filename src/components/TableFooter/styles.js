import styled from 'styled-components';
import CaretDown from '../../icons/CaretDown.png';

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

  @media (max-width: 600px) {
    .select {
      display: flex;
      margin-left: 16px
      margin-right: 16px;
    }

    .buttons {
      margin-left: 10px;
    }
  }
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
  background-color: #fff;
  svg {
    fill: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.26)' : 'inherit')};
  }

  @media (max-width: 600px) {
    padding: 6px;
  }
`;
