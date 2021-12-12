import React, { useState } from 'react'
import "./contact.scss"
function Contact() {
    const [message, setmessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setmessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email'/>
                    <textarea name="" placeholder='Message'  cols="30" rows="10"></textarea>
                <button type='submit'>Submit</button>
                {message&& <div className='message'>
                    <span>Thanks for contacting me I will reply ASAP </span>
                    </div>}
                </form>
            </div>
        </div>
    )
}

export default Contact
