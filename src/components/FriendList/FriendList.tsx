import FriendListItem from "./FriendListItem";
import { List, ListItem } from "./FriendList.styled";

import type { friendType } from "../../types/types";

function FriendList({ friends }: { friends: friendType[] }) {
  return (
    <List>
      {friends.map((item) => {
        return (
          <ListItem key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline ? "Online" : "Offline"}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

export default FriendList;
