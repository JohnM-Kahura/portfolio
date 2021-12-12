import React from 'react'

import Mail from '@mui/icons-material/Email';
import Person from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import TwitterIcon from '@mui/icons-material/Twitter';


import "./topbar.scss"
function TopBar({menuOpen,setmenuOpen}) {
    return (
        <div className={"topbar "+(menuOpen &&"active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >JM.</a>
                    <div className="itemContainer phone">
                        <Person className="icon"/>
                        <span>0795388701</span>
                    </div>
                    <div className="itemContainer email">
                        <Mail className="icon"/>
                        <span>johnmungai392@gmail.com</span>
                    </div>
                    <div className="itemContainer github">
                        <GitHubIcon className="icon"/>
                        <span><a href="https://github.com/JohnM-Kahura"target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </div>
                    <div className="itemContainer">
                        <TwitterIcon className="icon twitter"/>
                        <span><a href="https://twitter.com/JMKahura"target="_blank" rel="noopener noreferrer">Twitter</a></span>
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
