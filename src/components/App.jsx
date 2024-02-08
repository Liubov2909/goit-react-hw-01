import './App.css';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

export const App = () => {
  return (
    <>
      <Profile info={userData} />
    
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

