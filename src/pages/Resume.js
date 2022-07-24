import React from 'react';
import '../css/resume.css';

function Resume() {
    return(
        <div>
            <section id="resume">
                <h2 className='section-title'>Resume</h2>
                <div className='resume'>
                    Download my <a href={require(`../assets/cburton_resume.pdf`)} download>Resume</a>
                    <br />
                    <br />
                    <p>
                        Front-end proficiencies
                    </p>
                    <ul>
                    
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>BootStrap</li>
                        <li>JQuery</li>
                        <li>Handlebar.js</li>
                    </ul>
                    <p>
                        Back-end proficiencies
                    </p>    
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MondoDB</li>
                    </ul>
                </div>
            </section>
        </div>
    )    
}

export default Resume;