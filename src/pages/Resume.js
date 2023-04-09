import React from 'react';
import '../css/resume.css';

function Resume() {
    return(
        <div>
            <section id="resume">
                <h2 className='section-title'>Resume</h2>
                <div className='resume '>
                    Download <a href={require(`../assets/cburton_resume.pdf`)} download>Resume</a>
                    <br />
                    <br />
                    <p>
                        Front-end Skills
                    </p>
                    <div>
                        <img class="skills" src={require(`../assets/images/badges/html.png`)} alt="HTML"/>
                        <img class="skills" src={require(`../assets/images/badges/CSS.png`)} alt="CSS"/>
                        <img class="skills" src={require(`../assets/images/badges/JavaScript.png`)} alt="JavaScript"/>
                        <img class="skills" src={require(`../assets/images/badges/handlebars.png`)} alt="Handlebars"/>
                        <img class="skills" src={require(`../assets/images/badges/react.png`)} alt="React"/>
                        <img class="skills" src={require(`../assets/images/badges/bootstrap.png`)} alt="Bootstrap"/>
                        <img class="skills" src={require(`../assets/images/badges/jquery.png`)} alt="jquery"/>
                    </div>
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
                        Back-end Skills
                    </p>    
                    <div>
                        <img class="skills" src={require(`../assets/images/badges/nodejs.png`)} alt="nodejs"/>
                        <img class="skills" src={require(`../assets/images/badges/express.png`)} alt="Express"/>
                        <img class="skills" src={require(`../assets/images/badges/mysql.png`)} alt="MySQL"/>
                        <img class="skills" src={require(`../assets/images/badges/mongodb.png`)} alt="mongodb"/>
                    </div>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    <p>
                        Tools
                    </p>
                    <div>
                        <img class="skills" src={require(`../assets/images/badges/visualstudio.png`)} alt="Visual Studio"/>
                        <img class="skills" src={require(`../assets/images/badges/github.png`)} alt="GitHub"/>
                        <img class="skills" src={require(`../assets/images/badges/heroku.png`)} alt="Heroku"/>
                    </div>
                    <ul>
                        <li>Visual Studio</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                    </ul>
                </div>
            </section>
            <section class="badges">
            <img src={require(`../assets/images/badges/fswd.png`)} alt="Full Stack Web Developer Badge"/>
            </section>
        </div>
    )    
}

export default Resume;