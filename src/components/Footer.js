import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div id="iconLink">
                <a href="https://github.com/Wizzle13">
                    <img src={require(`../assets/images/github.webp`)} alt="Github"  />
                </a>
                <a href="https://www.linkedin.com/in/christopher-burton-aba9651b9/">
                    <img src={require(`../assets/images/Linkedin.png`)} alt="LinkedIn"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;