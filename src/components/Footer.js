import React from 'react';
import '../css/footer.css';
import 'https://kit.fontawesome.com/b6f1bbf07b.js'
function Footer() {
    return (
        <footer>
            <div class="social-container" id="iconLink">
                <ul className="flex-row">
                    <li>
                        <a class="btn" href="https://github.com/Wizzle13">
                            <i class="fa fa-github"></i><span class="hide-text">Github</span>
                        </a>
                    </li>
                    <li>
                        <a class="btn" href="https://www.linkedin.com/in/christopher-burton-aba9651b9/">
                            <i class="fa fa-linkedin"></i><span class="hide-text">Linked In</span>
                        </a>
                    </li>
                </ul>
                
                
            </div>
        </footer>
    )
}

export default Footer;