import styled from "@emotion/styled";

const Table = styled.table`
  min-width: 80%;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  border: 5px solid #000;
  border-radius: 10px;

  & td,
  & th {
    padding: 10px;
  }
`;

const TableHeader = styled.thead`
  color: #fff;
  background-color: #000;
`;

const TableBody = styled.tbody`
  & tr:nth-of-type(2n) {
    background-color: grey;
  }
`;

export { Table, TableHeader, TableBody };
