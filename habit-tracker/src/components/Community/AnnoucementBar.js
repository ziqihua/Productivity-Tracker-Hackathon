import { useEffect, useState } from "react";
import "../CSS/AnnoucementBar.css";
import Marquee from "react-fast-marquee";

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <Marquee speed={60} gradient={false} pauseOnHover>
          <div className="text1">
            <p>
              🎉 <span className="name">austin</span> just earned the{" "}
              <span className="badge-categoty">job hunting</span> badge by being
              consistent for 3 weeks 🎉
            </p>
          </div>
          <div className="text2">
            <p>
              🎉 <span className="name">grace</span> just earned the{" "}
              <span className="badge-categoty">health</span> badge by being
              consistent for 1 week 🎉
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default AnnouncementBar;
