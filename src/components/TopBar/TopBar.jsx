import React from 'react'
// import {Person,Mail} from 'material-ui/icons';
import Mail from '@mui/icons-material/Email';
import Person from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub'; 


import "./topbar.scss"
function TopBar({menuOpen,setmenuOpen}) {
    return (
        <div className={"topbar "+(menuOpen &&"active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >Mungai.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>0795388701</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>johnmungai392@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className="icon"/>
                        <span><a href="https://github.com/JohnM-Kahura"target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen )}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
