import './App.css';
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { Profile } from './profile/Profile';
import { FriendList } from './friendlist/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';


export const App = () => {
  return (
    <>
      <Profile info={userData} />
    
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

