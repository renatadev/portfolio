import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

const App = () => {
  const [projectData, setProjectData] = useState(null);

  const projectDataCall = async () => {
    await (await fetch("/.netlify/functions/projectsData/projectsData.js"))
      .json()
      .then(data => setProjectData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    projectDataCall();
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <About />
        <Route render={() => <Projects projectData={projectData} />} />
        {/* <TechStack />
        <Contact /> */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
