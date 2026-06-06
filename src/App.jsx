import "./App.css"
import About from "./components/About";
import AiChat from "./components/AiChat";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aiassistent" element={<AiChat />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
