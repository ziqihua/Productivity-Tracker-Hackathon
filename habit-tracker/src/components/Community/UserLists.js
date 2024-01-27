import "../CSS/UserList.css";
import { useState } from "react";

const users = [
  {
    id: 1,
    userName: "Grace",
    image: require("../../pics/image1.png"),
    communities: ["Health"],
  },
  {
    id: 2,
    userName: "Austin",
    image: "https://cdn-icons-png.flaticon.com/512/13542/13542465.png",
    communities: ["Health", "Job-related"],
  },
  {
    id: 3,
    userName: "Nollie",
    image: "https://cdn-icons-png.flaticon.com/512/13542/13542450.png",
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
