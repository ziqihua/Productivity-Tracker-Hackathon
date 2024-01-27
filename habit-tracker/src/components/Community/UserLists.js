import "../CSS/UserList.css";
import { useState } from "react";

const users = [
  {
    id: 1,
    userName: "grace",
    image: require("../../pics/image1.png"),
    communities: ["Health"],
  },
  {
    id: 2,
    userName: "austin",
    image: require("../../pics/image2.png"),
    communities: ["Health", "Job-related"],
  },
  {
    id: 3,
    userName: "coolman",
    image: require("../../pics/image3.png"),
    communities: ["Job-related"],
  },
  // Add more user objects as needed
];

function UserLists() {
  const [selectedCommunity, setSelectedCommunity] = useState("");

  const handleCommunityChange = (event) => {
    setSelectedCommunity(event.target.value);
  };

  const filteredUsers = selectedCommunity
    ? users.filter((user) => user.communities.includes(selectedCommunity))
    : users;

  return (
    <div className="user-lists">
      <div className="community-filter">
        <select id="community-select" onChange={handleCommunityChange}>
          <option value="">All Communities</option>
          <option value="Health">Health</option>
          <option value="Job-related">Job-related</option>
        </select>
      </div>
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index} className="user-item">
            <img
              src={user.image}
              alt={user.userName}
              className="profile-photo"
            />
            <span className="user-name">{user.userName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserLists;
