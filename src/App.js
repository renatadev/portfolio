import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
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

  const [techData, setTechData] = useState(null);

  const techDataCall = async () => {
    await (await fetch("/.netlify/functions/techData/techData.js"))
      .json()
      .then(data => setTechData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    techDataCall();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <About />
        <Route render={() => <Projects projectData={projectData} />} />
        <Route render={() => <TechStack techData={techData} />} />
        <Footer />
      </Router>
    </>
  );
};

export default App;
