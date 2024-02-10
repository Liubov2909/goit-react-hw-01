import { FriendListItem } from "./FriendListItem";

import style from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map((friends) => (
        <li className={style.item} key={friends.id}> 
          <FriendListItem {...friends} />
        </li>
      ))}
    </ul>
  );
};