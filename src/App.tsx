import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <div
      style={{
        padding: "10px 0",
        maxWidth: "950px",
        margin: "0 auto",
      }}
    >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
