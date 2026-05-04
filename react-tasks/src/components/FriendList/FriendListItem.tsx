import { Image } from "./FriendList.styled";

import type { friendType } from "../../types/types";

export default function FriendListItem(friendListItem: friendType) {
  const { avatar, name, isOnline } = friendListItem;
  return (
    <div>
      <Image src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
