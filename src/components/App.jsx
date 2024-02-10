

import { Profile } from './Profile/Profile';

import { FriendList } from './Friendlist/FriendList';

import { TransactionHistory } from './Transactions/TransactionHistory';

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

