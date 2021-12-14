import React, { useState } from "react"
import TopBar from "./components/TopBar/TopBar"
import Intro from "./components/Intro/Intro"
import Work from"./components/Work/Work"
import Portfolio from "./components/Portfolio/PortFolio"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Menu from "./components/Menu/Menu"

import "./app.scss"

function App() {
  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <div className="app">

        <TopBar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>  
        <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Work/>
          <Testimonials/>
          <Contact/>
        </div>
      
    </div>
  );
}

export default App;
