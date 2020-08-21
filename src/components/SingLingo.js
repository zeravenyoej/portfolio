import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Slide } from 'react-reveal';

const SingLingo = () => {
    const [signFlipped, setSignFlipped] = useState(false);

    return (
        <Slide left>
            <section>
                <ReactCardFlip isFlipped={signFlipped}>
                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage signLingo"></div>
                    </div>

                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage signLingoBack"></div>
                    </div>
                </ReactCardFlip>
                <div className="description">
                    <div className="header">
                        <h1>SignLingo</h1>
                        <h5 className="date">April-May 2020</h5>
                    </div>
                    <h5>Tech Stack: React, Redux, Sass, Material UI, React Card Flip, Formik</h5>
                        <br/><hr/>
                    <div className="descriptionText">
                        <p>SignLingo is a mobile, sign language learning platform built to the specifications of a client on a remote, cross-functional team of 24 over 8 weeks. My team communicated through daily stand ups with our team lead, frequent pair programming, and periodic progress presentations with our UX Designer/stakeholder. We all touched on every area of the app, but I contributed most significantly to the&nbsp; 
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/signlingo-fe/pull/23">landing page</a>,&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/signlingo-fe/pull/8">Redux SignUp/Login logic</a>,&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/signlingo-fe/pull/38">dashboard</a>, and&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/signlingo-fe/pull/45">alphabet lessons</a>.
                        </p>
                        <p>I managed the flow of the app with my prior language curriculum expertise. We focused solely on the alphabet, and so I advocated for a present/practice/product model, and encouraged the team that would inherit the project to use a more robust language education framework to accommodate more complex language features. To further ease the handoff of this project, we routinely created user stories on a trello board and completed a project vision document.</p>
                        <p>Here’s&nbsp;  
                            <a target="_blank" rel="noopener noreferrer" href="https://master.d2965nx2i7rdu0.amplifyapp.com">the deployed site</a>,&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/signlingo-fe">the GitHub repository</a>,&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=QgZA837xNhA&feature=emb_logo">the video I made</a> when we were voted into finals of a competition for Lambda School’s best collaborative project, and&nbsp; 
                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@josephnevarez12">the blog posts I wrote</a> while working on SignLingo.
                        </p>
                    </div>
                </div>
            </section>
        </Slide>
    );
};

export default SingLingo;