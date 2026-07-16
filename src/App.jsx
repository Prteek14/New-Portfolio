import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import AiWrapper from "./components/AiWrapper";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Intro />
            <About />
            <Education />
            <Skills />
            <Work />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/ai"
        element={
          <>
            <AiWrapper />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
