import "./Home.css";
import Hero from "../../components/hero/hero";
import LiveSummary from "../../components/liveSummary/LiveSummary";
import Collections from "../../components/collections/Collections";
import About from "../../components/about/About";

const Home = () => {
  return (
    <div id="home" className="page">
      <Hero />
      <LiveSummary />
      <Collections />
      <About />
    </div>
  );
};

export default Home;
