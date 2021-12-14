import React, { useState } from 'react'
import "./contact.scss"
import API from '../../baseURL'
function Contact() {
    const [message, setmessage] = useState(false)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [messageBody, setmessageBody] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        var body = {
            'name': name,
            'email': email,
            'message': messageBody
        }
        API.post('contact/',body).then(res => {
            console.log(res);
            console.log(res.data);
          })
           .catch(err => console.log(err));
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
                    <input type="text" onChange={e=>setname(e.target.value)} placeholder='Full name'/>
                    <input type="Email" onChange={e=>setemail(e.target.value)} placeholder='Email'/>
                    <textarea name="message"onChange={e=>setemail(e.target.value)} placeholder='Message'  cols="30" rows="10"></textarea>
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
