import React, { useState } from 'react'
import "./work.scss"

import { useEffect } from 'react';
import API from '../../baseURL'
import WorkList from '../Worklist/WorkList';
export default function Work() {

    const [currentSlider, setcurrentSlider] = useState(0);
const [work, setwork] = useState([])
    useEffect(() => {
        API.get('work/').then(res => {
         
              
          setwork(res.data)
            
            
            }).catch(err => {
                console.log(err)
            })
             
      }, [])
   const handleArrowClick=(direction)=>{
direction==="left"? setcurrentSlider(currentSlider>0?currentSlider-1:2):
setcurrentSlider(currentSlider< work.length -1?currentSlider+1:0)

   }
    return (
        <div className="work" id="work">
            <div className="slider" style={{
                transform:`translateX(-${currentSlider *100}vw)`
            }}>
                {work.map(d=>(

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
                                     <span>Built with</span>
                                    {d.built.map(d=>(
                                        
                                        <WorkList frontend={d.frontend} language={d.language} backend={d.backend} database={d.database} worthy_mention={d.worthy_mention}/> 
                                    ))} 
                             </div>
                         </div>
                         <div className="right">
<img src={d.img}  />
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

