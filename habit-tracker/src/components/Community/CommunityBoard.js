import "../CSS/CommunityBoard.css";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import AnnoucementBar from "./AnnoucementBar";
import UserLists from "./UserLists";

function CommunityBoard() {
  return (
    <div className="community-board-container">
      <h2>Community</h2>
      <div className="top-section">
        <AnnoucementBar />
      </div>
      <div className="bottom-section">
        <div className="activity-feed">
          <ActivityFeed />
        </div>
        <div className="user-lists">
          <UserLists />
        </div>
      </div>
    </div>
  );
}

export default CommunityBoard;
