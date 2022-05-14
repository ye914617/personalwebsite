import Header from "./component/Header";
import About from "./component/About";
import AboutCard from "./component/AboutCard";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <AboutCard />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
