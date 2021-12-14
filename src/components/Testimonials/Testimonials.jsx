import React from 'react'
import "./testimonials.scss"
import API from '../../baseURL'
import { useEffect } from 'react'
import { useState } from 'react'
function Testimonials() {
    const openSocialTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      const [testimonials, settestimonials] = useState([])
      useEffect(() => {
        API.get('testimonials/').then(res => {
            //   console.log(res.data[0])
              
          settestimonials(res.data)
            
            
            }).catch(err => {
                console.log(err)
            })
             
      }, [])
    return (
        <div className="testimonials" id="testimonials">
            <h1> Testimonials</h1>
            <div className="container">
                {testimonials.map(d=>(

                    <div className={d.featured ? "card featured":"card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className='left' alt="" />
                        <img src={d.img} alt=""  className='user' />
                      
                        <img src={d.icon} onClick={()=> openSocialTab(d.social)} className='right' alt="twitter" />
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
