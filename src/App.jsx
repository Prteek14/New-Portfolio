import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div >
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Work/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
