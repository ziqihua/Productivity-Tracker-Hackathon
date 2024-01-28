import "../CSS/AnnoucementBar.css";
import Marquee from "react-fast-marquee";

function AnnouncementBar() {
    const announcements = [
        { name: "Austin", badge: "Job-related", duration: "3 weeks" },
        { name: "Grace", badge: "Health", duration: "1 week" },
        { name: "Nollie", badge: "Education", duration: "7 weeks"}
        // Add more announcements here
      ];

  return (
    <div className="announcement-bar">
      <Marquee speed={60} gradient={false} pauseOnHover>
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            <p>
              🎉 <span className="name">{announcement.name}</span> just earned the{" "}
              <span className="badge-category">{announcement.badge}</span> badge by being
              consistent for <span className="duration">{announcement.duration}</span> 🎉
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default AnnouncementBar;
