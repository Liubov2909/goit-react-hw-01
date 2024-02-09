import "./FriendList.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map((friends) => (
        <li className="friends-item" key={friends.id}> 
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
};