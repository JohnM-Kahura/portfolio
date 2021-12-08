import React from 'react'
import './menu.scss'
function Menu({menuOpen,setmenuOpen}) {
    return (
        <div className={"menu "+(menuOpen &&"active")}>
            <ul>
                <li onClick={()=>setmenuOpen(false)}><a href="#intro">Home</a></li>
                <li onClick={()=>setmenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
                <li onClick={()=>setmenuOpen(false)}><a href="#work">Work</a></li>
                <li onClick={()=>setmenuOpen(false)}><a href="#testimonials">Testimonials</a></li>
                <li onClick={()=>setmenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
        </div> 
    )
}

export default Menu
 