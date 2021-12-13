import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import API from '../../baseURL'
import "./intro.scss"
function Intro() {
    const textRef = useRef()
//    const getLang => {
       
    
//         const response = await API.get('intro');
//         console.log(response);
//         console.log(response.data);
//       };
    useEffect(() =>  {
        
    // getLang()
    const response = API.get('intro');
    console.log(response)
    console.log(response.data)
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
