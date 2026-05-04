import styled from '@emotion/styled';

export const TransactionContainer = styled.table`
  width: 100%;
  border-collapse: collapse;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const TransactionHeader = styled.th`
  background-color: rgb(17, 136, 172);
  padding: 10px;

  text-align: center;

  &:nth-of-type(2n) {
    border-left: solid 1px #eee7e7;
    border-right: solid 1px #eee7e7;
  }
`;

export const TransactionData = styled.td`
  padding: 10px;

  text-align: center;

  &:nth-of-type(2n) {
    border-left: solid 1px #eee7e7;
    border-right: solid 1px #eee7e7;
  }
`;

export const TransactionRow = styled.tr`
  &: nth-of-type(2n) {
    background-color: rgb(240, 240, 240);
  }
`;
