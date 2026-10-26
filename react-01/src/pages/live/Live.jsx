import "./Live.css";
import PageHeading from "../../components/pageHeading/PageHeading";
import image1 from "./images/calendar.png";

const Live = () => {
  return (
    <div className="page">
      <PageHeading title="LIVE ON WHATNOT" />
      <section className="container page-content live-page narrow">
        <img
          className="calendar"
          src={image1}
          alt="September 2026 calendar. A live show is marked for September 19 at 7 PM Eastern. This is the sample schedule from the wireframe."
        />
        <p className="eyebrow">September 2026 · Sample schedule</p>
        <a className="button" href="https://www.whatnot.com/user/jd3cards">
          Watch live on Whatnot <span>↗</span>
        </a>
        <p className="schedule-note">
          The monthly stream schedule will be released on the last day of the
          prior month. For show postponements or cancellations, please check{" "}
          <a href="https://www.tiktok.com/@jd3cards">TikTok</a> for updates.
        </p>
      </section>
    </div>
  );
};

export default Live;
