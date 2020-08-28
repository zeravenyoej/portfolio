import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Slide } from 'react-reveal';

const NASA = () => {
    const [signFlipped, setSignFlipped] = useState(false);

    return (
        <Slide left>
            <section id="nasaSection">
                <div className="description">
                    <div className="header">
                        <h1>NASA <br/> Photo of the Day</h1>
                        <h5 className="date">October 2019</h5>
                    </div>
                    <h5>Tech Stack: ReactJS, Moment, CSS</h5>
                        <br/><hr/>
                    <div className="descriptionText">
                        <p>NASA Photo of the Day is a responsive application on which you can see the “astronomy picture of the day”, and read the accompanying metadata (title, description, copyright information). I initially built this project in 2 days by myself, as a means of practicing both my Javascript and React skills. More specifically, I was targeting my emerging ability to work with&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://api.nasa.gov">an external API</a>.
                        </p>
                        <p>Ten months later, I returned to the project to update the styling (including experimenting with CSS animation), clean up with the code itself, and, most notably, extend it by adding an additional feature. The application now allows for the user to select another date, which makes an additional API call and retrieves new data, thus allowing the user full access to the API’s entire catalogue of images.</p>
                        <p>Here's <a target="_blank" rel="noopener noreferrer" href="https://github.com/zeravenyoej/nasa-photo-of-the-day">the GitHub repository</a> and&nbsp; 
                            <a target="_blank" rel="noopener noreferrer" href="https://nasa-photo-of-the-day-sage.vercel.app">the deployed site</a>.
                        </p>
                    </div>
                </div>

                <ReactCardFlip isFlipped={signFlipped}>
                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage nasa"></div>
                    </div>

                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage nasaBack"></div>
                    </div>
                </ReactCardFlip>
            </section>
        </Slide>
    );
};

export default NASA;