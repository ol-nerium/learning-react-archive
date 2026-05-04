import styled from "@emotion/styled";
import changeStatusColor from "../../utils";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 2rem;
  margin: 0 auto;
  justify-content: space-around;
  padding: 20px;
`;

const ListItem = styled.li`
  border: 5px solid #000;
  border-radius: 10px;
  padding: 10px;
  max-width: 10rem;

  & p:last-child {
    color: ${changeStatusColor};
  }

  p {
    text-align: center;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

export { List, ListItem, Image };
