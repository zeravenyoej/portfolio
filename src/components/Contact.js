import React from 'react';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import { LightSpeed } from 'react-reveal';

const Contact = () => {
    let intViewportWidth = window.innerWidth;

    return (
        <>
            {intViewportWidth > 1024 ? <NavBar/> : <Hamburger/>}
            <LightSpeed top>
                <div id="contact">
                    <form 
                        action="https://formsubmit.co/josephnevarez12@gmail.com" 
                        method="POST">
                        <h1 className="titleh1">Contact Me</h1>
                        <div id="mainInfoDiv">
                            <input className="mainInfo" type="text" placeholder="Full Name" name="name" required/>
                            <input className="mainInfo" type="email" placeholder="Email Address" name="email" required/>
                        </div>
                        <textarea placeholder="Your message" name="message" required/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </LightSpeed>
        </>
    )
};

export default Contact;