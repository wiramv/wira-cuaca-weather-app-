import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutMe from "./AboutMe";
import Footer from "./Comp/Footer";
import NavBar from "./Comp/NavBar";
import Main from "./Main";


import { useState, useEffect } from "react";
import AboutAcc from "./Comp/AboutAcc";
import Skills from "./Skills";
import SkillDesc from "./Comp/SkillDesc";
import Char from "./Char";
import PageNotFound from "./PageNotFound";
import ToUp from "./Comp/ToUp";
import Educations from "./Educations";
import Portfolio from "./Portfolio";
import Contact from "./Contact";



const App = () => {
    const [halaman, setHalaman] = useState("home")
    const [skill, setSkill] = useState("")
    const [upx, setUp] = useState(false)

    window.addEventListener('scroll', ()=> {
      if(window.pageYOffset > 200){
        setUp(true)
      }else{
        setUp(false)
      }}
    )

      return (
    <Router>
      <NavBar setHalaman={setHalaman} halaman={halaman}/>
      <div className="top-data">
        <Routes>
          <Route path="/"           element={<Main setHalaman={setHalaman} />} />
          <Route path="/about"      element={<AboutMe />} />
          <Route path="/skills"     element={<Skills setSkill={setSkill}/>}/>
          <Route path="/character"  element={<Char/>} />
          <Route path="/education"  element={<Educations/>} />
          <Route path="/portfolio"  element={<Portfolio/>} />
          <Route path="/contact"    element={<Contact/>} />
          <Route path="*"           element={<PageNotFound setHalaman={setHalaman} />} />
        </Routes>
      </div>
      {halaman === "about" &&  <AboutAcc/>}
      <SkillDesc skill={skill} halaman={halaman}/>
      {upx && <ToUp/>}
      <Footer />
    </Router>
  );
};
export default App;
