import "../CSS/CommunityBoard.css";
import{ useState } from "react";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import AnnoucementBar from "./AnnoucementBar";
import UserLists from "./UserLists";

function CommunityBoard() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="community-board-container">
      <h2>Community</h2>
      <div className="top-section">
        <AnnoucementBar />
      </div>
      <div className="bottom-section">
        <div className="activity-feed">
          <ActivityFeed filter={filter} />
        </div>
        <div className="user-lists">
        <UserLists filter={filter} onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
}

export default CommunityBoard;
