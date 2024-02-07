import './App.css';

import { Profile } from './Profile';

import userData from "../userData.json";

export const App = () => {
  return (
    <>
      <Profile info={userData} />
    </>
  );
};

