import React from 'react'
import "./testimonials.scss"
import {testimonialsData} from "../../data"
function Testimonials() {
    const openSocialTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return (
        <div className="testimonials" id="testimonials">
            <h1> Testimonials</h1>
            <div className="container">
                {testimonialsData.map(d=>(

                    <div className={d.featured ? "card featured":"card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className='left' alt="" />
                        <img src={d.img} alt=""  className='user' />
                      
                        <img src={d.icon} onClick={()=> openSocialTab(d.social)} className='right' alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h1>{d.name}</h1>
                        <h4>{d.title}</h4>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Testimonials
