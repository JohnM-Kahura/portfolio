import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import "./intro.scss"
function Intro() {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay:2000,
            backSpeed:60,
             strings: ['Python','Django','Flutter','React','NLP'] 
            }
            )
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man1.jpg" alt="Profile" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>John Mungai</h1>
                    <h3><span ref={textRef}></span> Engineer </h3>
                </div>
                <a href="#portfolio"><img src="assets/down.png" alt="" /></a>

            </div>
        </div>
    )
}

export default Intro
