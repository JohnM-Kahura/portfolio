import React, { useState } from 'react'
import "./work.scss"
import {workData} from "../../data"
export default function Work() {

    const [currentSlider, setcurrentSlider] = useState(0);
   const handleArrowClick=(direction)=>{
direction==="left"? setcurrentSlider(currentSlider>0?currentSlider-1:2):
setcurrentSlider(currentSlider< workData.length -1?currentSlider+1:0)

   }
    return (
        <div className="work" id="work">
            <div className="slider" style={{
                transform:`translateX(-${currentSlider *100}vw)`
            }}>
                {workData.map(d=>(

                <div className="container">
                    <div className="item">
                         <div className="left">
                             <div className="leftContainer">
                                 <div className="imageContainer">
                                     <img src={d.icon} alt="" />
                                 </div>
                                 <h2>{d.title}</h2>
                                 <p>{d.desc}
                                     </p>
                                     <span>Projects</span>
                             </div>
                         </div>
                         <div className="right">

                         </div>
                    </div>
                    </div>
                    ))}
                    </div>
                    <img src="assets/arrow.png" className="arrow left " alt="" onClick={()=>handleArrowClick("left")}/>
                    <img src="assets/arrow.png" className="arrow right " alt="" onClick={()=>handleArrowClick("right")} />
        </div>
    )
}

