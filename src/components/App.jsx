import './App.css';
import { Profile } from './Profile';
import { FriendList } from './FriendList';
import userData from "../userData.json";
import friends from "../friends.json";

export const App = () => {
  return (
    <>
      <Profile info={userData} />
    
      <FriendList friends={friends} />
    </>
  );
};

