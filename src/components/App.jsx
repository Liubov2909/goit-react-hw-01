import './App.css';
import { Profile } from './profile/Profile';
import { FriendList } from './friendlist/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';
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

