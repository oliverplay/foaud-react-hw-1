import React from 'react';

// COMPONENTS IMPORT
import Profile from './components/Profile/Profile';
// import FriendList from 'components/FriendList/FriendList';
// import Statistics from 'components/Statistics/Statistics';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// DATA IMPORT
import profileData from './data/user.json';
// import friendsData from './data/friends.json';
// import statisticsData from './data/statistics.json';
// import transactionsData from './data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile data={profileData} />
      {/* <FriendList /> */}
      {/* <Statistics /> */}
      {/* <TransactionHistory /> */}
    </div>
  );
};

export default App;
